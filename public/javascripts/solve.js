define(['map', 'view', 'editor'], function(map, view, editor) {

  var solve = {
    player : undefined,
    map : map,
    view : view,
    round : 0,
    index : [],
    startAnimate : function() {
      var timer = setInterval(function(){
        if (solve.round < map.round) {
          view.startAnimate(solve.round);
          solve.round++;
          editor.getSession().clearBreakpoints();
          editor.getSession().setBreakpoint(solve.index[solve.round]);
        } else
          clearInterval(timer);
      }, 50);
    },
    init : function() {
      // test code
      map.round = 0;
      solve.round = 0;
      map.index = 0;
      solve.index = [];

      view.init(map);
      solve.player = solve.findPlayers()[0];
    },
    strife : function(item1, item2) {
      if ((item2.x < item1.x + item1.width && item2.x >= item1.x) ||
          (item1.x < item2.x + item2.width && item1.x >= item2.x))
         if ((item2.y < item1.y + item1.height && item2.y >= item1.y) ||
             (item1.y < item2.y + item2.height && item1.y >= item2.y))
            return true;
      return false;
    },
    judge : function (item) {
      var array = [];
      for (var nitem in map.items) {
        if (solve.strife(map.items[nitem], item))
          if (item.id != nitem)
            array.push(map.items[nitem]);
      }
      return array;
    },
    move : function(item) {
      if (!item.move)
         return !item.stable;
      if (item._use) return true;
      item._use = true;
      item.x += item.vx, item.y += item.vy;
      var o = solve.judge(item);
      var flag = true;
      for (var nitem in o) {
        if (o[nitem].move) {
          o[nitem].vx += item.vx, o[nitem].vy += item.vy;
        }
        if (!solve.move(o[nitem])) flag = false;
      }
      if (!flag) {
        item.x -= item.vx, item.y -= item.vy;
        item.vx = 0, item.vy = 0;
      }
      item._use = false;
      return flag;
    },
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
        var x = item.vx, y = item.vy;
        item.vx = x, item.vy = 0;
        solve.move(item);
        x = item.vx;
        item.vx = 0, item.vy = y;
        solve.move(item);
        y = item.vy;
        item.vx = x, item.vy = y;
        view.move(item);
      }
    },
    setIndex : function(num) {
      map.index = num;
    },
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
	  if (item.type == 'victory') {
		viwe.use(item);
	  }
	  
      item._use = false;
    },
    sleep : function(msecs) {
      var start = new Date().getTime();
      var cur = start;
      while(cur - start < msecs)
        cur = new Date().getTime();
    },
    findId : function(id) {
      var item;
      for (item in map.items) {
        if (map.items[item].id == id)
          return map.items[item];
      }
    },
    findPlayers : function() {
      var array = [];
      var item;
      for (item in map.items) {
        if (map.items[item].type == 'player')
          array.push(map.items[item]);
      }
      return array;
    },
      left : function(num) {
        for (var i = 0; i < num; ++i) {
          solve.player.vx -= 2;
          solve.finish();
        }
      },
      right : function(num) {
        for (var i = 0; i < num; ++i) {
          solve.player.vx += 2;
          solve.finish();
        }
      },
      up : function(num) {
        for (var i = 0; i < num; ++i) {
          if (solve.player.ladder != null)
            solve.player.vy -= 2;
          solve.finish();
        }
      },
      down : function(num) {
        for (var i = 0; i < num; ++i) {
          if (solve.player.ladder != null)
              solve.player.vy -= 2;
          solve.finish();
        }
      },
      useItem : function(item, num) {
        for (var i = 0; i < num; ++i) {
          if (solve.strife(solve.player, item))
            if (item.canuse) {
              solve.use(item);
            }
          solve.finish();
        }
      },
      wait : function(num) {
        for (var i = 0; i < num; ++i) {
          solve.finish();
        }
      }
  };
  solve.init();
  return solve;
});
