+define(['jquery', 'snapsvg'], function($, snapsvg) {
  /* item_list: 关卡地图上所有物件的属性存放表
   * stack: 存放动画事件的栈
   * map: 模块传入map的拷贝
   */
  var item_list = [];
  var stack = [];
  var map;

  /* function init(_map)
   * 初始化游戏界面关卡地图
   * _map: 模块传入的map文件，由mapInfo中的地图文件决定
   */
  function init(_map) {
    map = _map;
    stack = [];
    item_list = [];

    // 绘制游戏界面背景
    var svg = Snap("#svg");
    var background = svg.paper.image(map.background.src, 0, 0, 600, 600);
    item_list.push(background);
    var player;

    // 逐一渲染关卡地图中的每一物件
    for (var i in map.items) {
      var nitem = map.items[i];
      // 渲染 player
      if(nitem.type == 'player') {
        player = svg.paper.image(nitem.src_stand_front, nitem.x, nitem.y, nitem.width, nitem.height);
        item_list.push({id: nitem.id, obj: player, type : 'player',
                        cur_src : nitem.src_stand_front,
                        src_walk_front : nitem.src_stand_front,
                        src_walk_back : nitem.src_walk_back,
                        src_walk_left : nitem.src_walk_left,
                        src_walk_right : nitem.src_walk_right,
                        src_stand_front : nitem.src_stand_front,
                        src_stand_back : nitem.src_stand_back,
                        src_stand_left : nitem.src_stand_left,
                        src_stand_right : nitem.src_stand_right});
        background.after(player);
        player.mousedown(function(e) {
          var str = "Object Type: player\nItem ID: " + nitem.id + "\n";
          console.log(str);
        });
      }
      // 渲染 ground
      else if(nitem.type == 'ground') {
        var ground = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        background.after(ground);
        player.before(ground);
        item_list.push({id: nitem.id, obj: ground, type : 'ground'});
        ground.mousedown(function(e) {
          var str = "Object Type: ground\nItem ID: " + nitem.id + "\n";
          console.log(str);
        });
      }
      // 渲染 box
      else if(nitem.type == 'box') {
        var box = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        background.after(box);
        player.before(box);
        item_list.push({id: nitem.id, obj: box, type : 'box'});
        box.mousedown(function(e) {
          var str = "Object Type: box\nItem ID: " + nitem.id + "\n";
          console.log(str);
        });
      }
      // 渲染 ladder
      else if(nitem.type == 'ladder') {
        var ladder = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        background.after(ladder);
        player.before(ladder);
        item_list.push({id: nitem.id, obj: ladder, type : 'ladder'});
        ladder.mousedown(function(e) {
          var str = "Object Type: ladder\nItem ID: " + nitem.id + "\n";
          console.log(str);
        });
      }
      // 渲染 knob
      else if(nitem.type == 'knob') {
        var knob;
        if(nitem.status == true) {
          knob = svg.paper.image(nitem.src_closed, nitem.x, nitem.y, nitem.width, nitem.height);
          item_list.push({id: nitem.id, obj: knob, type : 'knob',
                          status : nitem.status,
                          cur_src : nitem.src_closed,
                          src_closed : nitem.src_closed,
                          src_closing : nitem.src_closing,
                          src_opened : nitem.src_opened,
                          src_opening : nitem.src_opening});
        }
        else {
          knob = svg.paper.image(nitem.src_opened, nitem.x, nitem.y, nitem.width, nitem.height);
          item_list.push({id: nitem.id, obj: knob, type : 'knob',
                          status : nitem.status,
                          cur_src : nitem.src_opened,
                          src_closed : nitem.src_closed,
                          src_closing : nitem.src_closing,
                          src_opened : nitem.src_opened,
                          src_opening : nitem.src_opening});
        }
        knob.mousedown(function(e) {
          var str = "Object Type: knob\nItem ID: " + nitem.id + "\n";
          console.log(str);
        });
        background.after(knob);
        player.before(knob);
      }
      // 渲染 door
      else if(nitem.type == 'door') {
        var door;
        if(nitem.status == true) {
          door = svg.paper.image(nitem.src_closed, nitem.x, nitem.y, nitem.width, nitem.height);
          item_list.push({id: nitem.id, obj: door, type : 'door',
                          status : nitem.status,
                          cur_src : nitem.src_closed,
                          src_closed : nitem.src_closed,
                          src_closing : nitem.src_closing,
                          src_opened : nitem.src_opened,
                          src_opening : nitem.src_opening});
        }
        else {
          door = svg.paper.image(nitem.src_opened, nitem.x, nitem.y, nitem.width, nitem.height);
          item_list.push({id: nitem.id, obj: door, type : 'door',
                          status : nitem.status,
                          cur_src : nitem.src_opened,
                          src_closed : nitem.src_closed,
                          src_closing : nitem.src_closing,
                          src_opened : nitem.src_opened,
                          src_opening : nitem.src_opening});
        }
        door.mousedown(function(e) {
          var str = "Object Type: door\nItem ID: " + nitem.id + "\n";
          console.log(str);
        });
        background.after(door);
        player.before(door);
      }
      // 渲染 fish: 获胜物件
	    else if(nitem.type == 'fish') {
        var fish = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        background.after(fish);
        player.before(fish);
        item_list.push({id: nitem.id, obj: fish, type : 'fish'});

        fish.mousedown(function(e) {
          var str = "Object Type: fish\nItem ID: " + nitem.id + "\n";
          console.log(str);
        });
      }
      // 渲染 stone
	    else if(nitem.type == 'stone') {
        var stone = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        background.after(stone);
        player.before(stone);
        item_list.push({id: nitem.id, obj: fish, type : 'stone'});
        stone.mousedown(function(e) {
          var str = "Object Type: stone\nItem ID: " + nitem.id + "\n";
          console.log(str);
        });
      }
      // 报错
      else {
        console.log("!!!error, unknown item in initialization!!!");
      }
    }
    console.log("initialization finished...");
  };

  /* function __move(id, x, y)
   * player 移动动画呈现函数
   * id: player's id
   * x: player 新位置横坐标
   * y: player 新位置纵坐标
   */
  function __move(id, x, y) {
    //
    if(stack[stack.length-1][0].id == 0) {
      var last_pos_x = stack[stack.length-1][0].x;
      var last_pos_y = stack[stack.length-1][0].y;
    }
    else {
      console.log("in __move err...");
    }
    for (var i in item_list) {
      if (id == item_list[i].id) {
        var old_cx = parseInt(item_list[i].obj.attr("x"));
		    var old_cy = parseInt(item_list[i].obj.attr("y"));
		    var new_cx = x;
		    var new_cy = y;
        var choose_src;
        // 由新位置判断当前 player 移动状态（更改载入图片）
        if(new_cx > old_cx) {
          choose_src = item_list[i].src_walk_right;
        }
        else if(new_cx < old_cx) {
          choose_src = item_list[i].src_walk_left;
        }
        else {
          if(new_cy >= old_cy) {
            choose_src = item_list[i].src_walk_front;
          }
          else {
            choose_src = item_list[i].src_walk_back;
          }
        }
        // 通过 player 当前状态更改载入动画
        if(item_list[i].cur_src != choose_src) {
          var set = {
            "xlink:href": choose_src,
            preserveAspectRatio: "none"
          };
　　　　   Snap._.$(item_list[i].obj.node, set);
          item_list[i].cur_src = choose_src;
        }
        Snap.animate([old_cx, old_cy], [new_cx, new_cy], function (val){
          item_list[i].obj.attr({
            x: val[0],
            y: val[1]
          });
        }, 10, mina.linear, function(){
          if(last_pos_x==new_cx && last_pos_y==new_cy) {
            console.log("what");
            if(item_list[i].cur_src == item_list[i].src_walk_front) {
              var set = {
                "xlink:href": item_list[i].src_stand_front,
                preserveAspectRatio: "none"
              };
  　　　　     Snap._.$(item_list[i].obj.node, set);
              item_list[i].cur_src = item_list[i].src_stand_front;
            }
            if(item_list[i].cur_src == item_list[i].src_walk_back) {
              var set = {
                "xlink:href": item_list[i].src_stand_back,
                preserveAspectRatio: "none"
              };
  　　　　     Snap._.$(item_list[i].obj.node, set);
              item_list[i].cur_src = item_list[i].src_stand_back;
            }
            if(item_list[i].cur_src == item_list[i].src_walk_left) {
              var set = {
                "xlink:href": item_list[i].src_stand_left,
                preserveAspectRatio: "none"
              };
  　　　　     Snap._.$(item_list[i].obj.node, set);
              item_list[i].cur_src = item_list[i].src_stand_left;
            }
            if(item_list[i].cur_src == item_list[i].src_walk_right) {
              var set = {
                "xlink:href": item_list[i].src_stand_right,
                preserveAspectRatio: "none"
              };
  　　　　     Snap._.$(item_list[i].obj.node, set);
              item_list[i].cur_src = item_list[i].src_stand_right;
            }
          }
        });
        break;
      }
    }
  };

  /* function __use(id)
   * 物件使用函数
   * id: 所使用物件的唯一 id
   */
  function __use(id) {
    for (var i in item_list) {
      // 对物件 door 的使用：开 & 关
      if(id == item_list[i].id && item_list[i].type=='door') {
        Snap.animate(0, 12, function (val){ }, 10, mina.linear, function(){
          if(item_list[i].status == false) {
            item_list[i].status = true;
            var set = {
              "xlink:href": item_list[i].src_closed,
              preserveAspectRatio: "none"
            };
  　　　　  Snap._.$(item_list[i].obj.node, set);
          }
          else {
            item_list[i].status = false;
            var set = {
              "xlink:href": item_list[i].src_opened,
              preserveAspectRatio: "none"
            };
  　　　　  Snap._.$(item_list[i].obj.node, set);
          }
        });
        break;
      }
      // 对物件 knob 的使用：开（正旋） & 关（反旋）
      if(id == item_list[i].id && item_list[i].type=='knob') {
        var old_cx = parseInt(item_list[i].obj.attr("x"));
        var old_cy = parseInt(item_list[i].obj.attr("y"));
        var rot_start = 0;
        var rot_end;
        if(item_list[i].status == true) {
          rot_end = 90;
        }
        else {
          rot_end = -90;
        }
        Snap.animate(rot_start, rot_end, function (val){
          item_list[i].obj.transform(new Snap.Matrix().rotate(val, old_cx+25, old_cy+25));
        }, 2000);
        break;
      }
    }
  };

  /* function startAnimate(round)
   * 动画播放函数，依据传入回合号记录的预运算产生动画序列事件
   * round: 所给的回合序号
   */
  function startAnimate(round) {
    if (stack[round] == null)
      return ;
    stack[round].forEach(function(val) {
      switch (val.type) {
        case 'move':
          __move(val.id, val.x, val.y);
          break;
        case 'use':
          __use(val.id);
          break;
        default:
      }
    });
  };

  /* function move(item)
   * 对外接口，玩家移动函数。添加移动任务进事件栈，预执行代码，不播放动画
   * item: player
   */
  function move(item) {
    while (stack.length <= map.round) stack.push([]);
    var flag = false;
    stack[map.round].forEach(function(val){
      if (val.id == item.id && val.type == 'move') {
        flag = true;
        val.x += item.x, val.y += item.y;
      }
    });
    if (!flag) stack[map.round].push({id : item.id, x : item.x, y : item.y, type : 'move'});
  };

  /* function use(item)
   * 对外接口，物件使用函数。添加移动任务进事件栈，预执行代码，不播放动画
   * item: 物件于地图中的 id
   */
  function use(item) {
    while (stack.length <= map.round) stack.push([]);
    stack[map.round].push({id : item.id, type : 'use'});
  };

  /* function getItemPos(id)
   * 对外接口，物件坐标返回函数。
   * id: 想要获取坐标的界面内物件的 id
   */
  function getItemPos(id) {
    for (var i in item_list) {
      if (id == item_list[i].id) {
        var old_cx = parseInt(item_list[i].obj.attr("x"));
		    var old_cy = parseInt(item_list[i].obj.attr("y"));
        return {
          x : old_cx,
          y : old_cy
        };
      }
    }
  };

  /* 模块返回 接口表
   */
  return {
    init : init,
    move : move,
    use : use,
    startAnimate : startAnimate,
    getItemPos : getItemPos
  };
});
