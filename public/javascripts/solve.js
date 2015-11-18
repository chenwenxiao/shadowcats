define(['map', 'view', 'editor', 'jquery'], function(map, view, editor, $) {
  /* 游戏关卡逻辑
   * map: 地图模块
   * view: 界面宣热模块
   * editor: 代码编辑模块
   * $: jquery
   */
  var solve = {
    player : undefined,
    map : map,
    view : view,
    round : 0,
    index : [],

    /* startAnimate : function(code)
     * 动画事件序列生成
     * code: 代码编辑模块传入的经解析过的文本
     */
    startAnimate : function(code) {
      var timer = setInterval(function(){
        if (solve.round < map.round) {
          view.startAnimate(solve.round);
          solve.round++;
          editor.getSession().clearBreakpoints();
          editor.getSession().setBreakpoint(solve.index[solve.round]);
          var playerPos = view.getItemPos(solve.player.id);
          // 失败判断
          if (playerPos.x < -50 || playerPos.x > 600 || playerPos.y < -45 || playerPos.y > 600) {
            clearInterval(timer);
            solve.init();
            $('#lose').click();
          }
        }
        // 获胜（过关判断）
        else {
          clearInterval(timer);
          if (solve.victory) {
            $('#back').click();
            $.post("game?"+"stage="+map.stage+"&total="+code,{},function(result){
            });
          }
        }
      }, 50);
    },

    /* init : function()
     * 初始化游戏界面
     */
    init : function() {
      var str = $('#map').text();
      map = JSON.parse(str);

      map.round = 0;
      solve.round = 0;
      solve.index = [];
      solve.victory = false;
      view.init(map);
      solve.player = solve.findPlayers()[0];
    },

    /* strife : function(item1, item2)
     * 物件碰撞判定函数
     */
    strife : function(item1, item2) {
      if ((item2.x < item1.x + item1.width && item2.x >= item1.x) ||
          (item1.x < item2.x + item2.width && item1.x >= item2.x))
         if ((item2.y < item1.y + item1.height && item2.y >= item1.y) ||
             (item1.y < item2.y + item2.height && item1.y >= item2.y))
            return true;
      return false;
    },

    /* judge : function (item)
     * 将一个物件 与之相交的物件放入该物件的数组中
     * item: 物件个体
     */
    judge : function (item) {
      var array = [];
      for (var nitem in map.items) {
        if (solve.strife(map.items[nitem], item))
          if (item.id != nitem)
            array.push(map.items[nitem]);
      }
      return array;
    },

    /* movex : function(item)
     * 物件物理属性（ x 坐标方向上是否可移动）判断函数
     * item: 物件个体
     */
    movex : function(item) {
      if (!item.move)
         return !item.stable;
      if (item._use) return true;
      item._use = true;
      item.x += item.vx;
      var o = solve.judge(item);
      var flag = true;
      for (var nitem in o) {
        if (o[nitem].move) {
          o[nitem].vx += item.vx;
        }
        if (!solve.movex(o[nitem])) flag = false;
      }
      if (!flag) {
        item.x -= item.vx;
        item.vx = 0;
      }
      item._use = false;
      return flag;
    },

    /* movey : function(item)
     * 物件物理属性（ y 坐标方向上是否可移动）判断函数
     * item: 物件个体
     */
    movey : function(item) {
      if (!item.move)
         return !item.stable;
      if (item._use) return true;
      item._use = true;
      item.y += item.vy;
      var o = solve.judge(item);
      var flag = true;
      for (var nitem in o) {
        if (o[nitem].move) {
          o[nitem].vy += item.vy;
        }
        if (!solve.movey(o[nitem])) flag = false;
      }
      if (!flag) {
        item.y -= item.vy;
        item.vy = 0;
      }
      item._use = false;
      return flag;
    },

    /* _move : function(item)
     * 物件物理属性控制（ 关卡地图上是否可移动）函数
     * item: 物件个体
     */
    _move : function(item) {
      if (item.ladder != null) {
        item.x += item.vx;
        if (!solve.strife(item, solve.findId(item.ladder)))
          item.x -= item.vx;
        item.y += item.vy;
        if (!solve.strife(item, solve.findId(item.ladder)))
          item.y -= item.vy;
        view.move(item);
      } else {
        solve.movex(item);
        solve.movey(item);
        view.move(item);
      }
    },

    /* setIndex : function(num)
     * 方便动画及相应时间内核对应
     */
    setIndex : function(num) {
      map.index = num;
    },

    /* finish : function()
     * 对一个回合进行完整计算操作
     */
    finish : function() {
      var item;
      for (item in map.items)
        if (map.items[item].gravity)
          map.items[item].vy += 3;
//======================================
      for (item in map.items)
        if (map.items[item].move)
          solve._move(map.items[item]);
      solve.index.push(map.index);
      map.round++;

      for (item in map.items)
        if (map.items[item].move) {
          if (map.items[item].vx > 0) map.items[item].vx -= 2;
          if (map.items[item].vx < 0) map.items[item].vx += 2;
          if (map.items[item].vy > 0) map.items[item].vy -= 2;
          if (map.items[item].vy < 0) map.items[item].vy += 2;
        }
    },

    /* use : function(item)
     * 物件功能使用函数
     * item: 物件个体
     */
    use : function(item) {
      var nitem;
      item._use = true;
      if (item.type == 'knob') {
        for (nitem in item.targets)
          if (!item.targets[nitem]._use) solve.use(solve.findId(item.targets[nitem]));
        view.use(item);
        item.status = !item.status;
      }
      if (item.type == 'door') {
        if (item.status) {
          item.status = item.stable = false;
        } else {
          item.status = item.stable = true;
        }
        view.use(item);
      }
      if (item.type == 'ladder') {
        if (solve.player.ladder == item.id)
          solve.player.gravity = true, solve.player.ladder = null;
        else
          solve.player.gravity = false, solve.player.ladder = item.id;
      }
  	  if (item.type == 'fish') {
  		  view.use(item);
        solve.victory = true;
  	  }
      item._use = false;
    },

    /* sleep : function(msecs)
     * 自实现 sleep 函数
     */
    sleep : function(msecs) {
      var start = new Date().getTime();
      var cur = start;
      while(cur - start < msecs)
        cur = new Date().getTime();
    },

    /* findId : function(id)
     * 通过 id 找寻物件在地图中的对应个体
     * id: 物件唯一 id
     */
    findId : function(id) {
      var item;
      for (item in map.items) {
        if (map.items[item].id == id)
          return map.items[item];
      }
    },

    /* findPlayers : function()
     * 返回 player（原设计考虑多角色，待实现……）
     */
    findPlayers : function() {
      var array = [];
      var item;
      for (item in map.items) {
        if (map.items[item].type == 'player')
          array.push(map.items[item]);
      }
      return array;
    },

    /* left : function(num)
     * 物件向左移动函数
     * num: 程序执行与动画播放关联的内核对应
     */
    left : function(num) {
      for (var i = 0; i < num; ++i) {
        solve.player.vx -= 2;
        solve.finish();
      }
    },

    /* right : function(num)
     * 物件向右移动函数
     * num: 程序执行与动画播放关联的内核对应
     */
    right : function(num) {
      for (var i = 0; i < num; ++i) {
        solve.player.vx += 2;
        solve.finish();
      }
    },

    /* up : function(num)
     * 物件向上移动函数
     * num: 程序执行与动画播放关联的内核对应
     */
    up : function(num) {
      for (var i = 0; i < num; ++i) {
        if (solve.player.ladder != null)
          solve.player.vy -= 2;
        solve.finish();
      }
    },

    /* down : function(num)
     * 物件向下移动函数
     * num: 程序执行与动画播放关联的内核对应
     */
    down : function(num) {
      for (var i = 0; i < num; ++i) {
        if (solve.player.ladder != null)
            solve.player.vy -= 2;
        solve.finish();
      }
    },

    /* useItem : function(num)
     * 物件功能使用函数
     * num: 程序执行与动画播放关联的内核对应
     */
    useItem : function(id) {
      var num = arguments[1] ? arguments[1] : 1;
      var item = map.items[id];
      for (var i = 0; i < num; ++i) {
        if (solve.strife(solve.player, item))
          if (item.canuse) {
            solve.use(item);
          }
        solve.finish();
      }
    },

    /* wait : function(num)
     * 程序执行完毕后物件动画播放的等待函数
     * num: 程序执行与动画播放关联的内核对应
     */
    wait : function(num) {
      for (var i = 0; i < num; ++i) {
        solve.finish();
      }
    }
  };
  solve.init();
  return solve;
});
