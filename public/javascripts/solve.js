define(['map', 'view'], function(map, view) {

  var solve = {
    player : undefined,
    map : map,
    view : view,
    round : 0,
    simulateMove : function(item, dx, dy) {
      if (!item.move)
        return false;
      if (item._use)
        return true;
      item._use = true;

      item.x = item.x + dx;
      item.y = item.y + dy;

      var o = solve.judge(item);
      var nitem, flag = true;
      for (nitem in o) {
        if (!solve.simulateMove(o[nitem], dx, dy))
          flag = false;
      }
      item.x = item.x - dx;
      item.y = item.y - dy;

      item._use = false;
      return true;
    },
    startAnimate : function() {
      setInterval(function(){
        if (solve.round < map.round) {
          view.startAnimate(solve.round);
          solve.round++;
        }
      }, 50);
    },
    init : function() {
      // test code
      map.round = 0;
      solve.round = 0;
      view.init(map);

      $("#test").click(function(){
        for (map.round = 0; map.round < 100; ++map.round) {
          view.move(map.items[0], 4, 0);
          view.move(map.items[1], 0, 1);
        }
        solve.startAnimate();
      });
      $("#go").click(function(){
        view.__use(map.items[2]);
      });

      solve.player = solve.findPlayers()[0];
    },
    strife : function(item1, item2) {
      if (item2.x < item1.x + item1.width && item2.x > item1.x &&
          item2.y < item1.y + item1.height && item2.y > item1.y)
            return true;
      if (item1.x < item2.x + item2.width && item1.x > item2.x &&
          item1.y < item2.y + item2.height && item1.y > item2.y)
            return true;
      return false;
    },
    judge : function (item) {
      var array = [];
      for (var nitem in map.items) {
        if (solve.strife(map.items[nitem], item))
          array.push(map.items[nitem]);
      }
      return array;
    },
    move : function(item, dx, dy) {
      if (item._use)
        return true;
      item._use = true;
      item.x = item.x + dx;
      item.y = item.y + dy;
      var o = solve.judge(item);
      for (var nitem in o) {
        solve.move(o[nitem], dx, dy);
      }
      item._use = false;
      view.move(item, dx, dy);
    },
    _move : function(item, dx, dy) {
      if (solve.simulateMove(item, dx, dy)) {
        solve.move(item, dx, dy);
      }
    },
    gravity : function(item) {
      solve._move(item, 0, 1);
    },
    finish : function() {
      var item;
      for (item in map.items)
        solve.gravity(map.items[item]);
      map.round++;
    },
    use : function(item) {
      var nitem;
      item._use = true;
      if (item.type == 'knob') {
        for (nitem in item.targets)
          if (!item.targets[nitem]._use) solve.use(nitem);
        //view.use(item);
      }
      if (item.type == 'door') {
        if (item.status) {
          item.status = item.stable = false;
        } else {
          item.status = item.stable = true;
        }
        //view.use(item, false);
      }
      item._use = false;
    },
    sleep : function(msecs) {
      var start = new Date().getTime();
      var cur = start;
      while(cur - start < msecs)
        cur = new Date().getTime();
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
      findStrifes : function() {
        var array = [];
        var item;
        for (item in map.items) {
          if (solve.strife(solve.player, map.items[item]))
            array.push(map.items[item]);
        }
        return array;
      },
      left : function(num) {
        for (var i = 0; i < num; ++i) {
          solve._move(solve.player, -1, 0);
          solve.finish();
        }
      },
      right : function(num) {
        for (var i = 0; i < num; ++i) {
          solve._move(solve.player, 1, 0);
          solve.finish();
        }
      },
      up : function(num) {
        for (var i = 0; i < num; ++i) {
          var o = findStrifes();
          var item;
          for (item in o) {
            if (o[item].climb) {
              solve._move(solve.player, 0, -1);
              return ;
            }
          }
          solve.finish();
        }
      },
      down : function(num) {
        for (var i = 0; i < num; ++i) {
          var o = findStrifes();
          var item;
          for (item in o) {
            if (o[item].climb) {
              solve._move(solve.player, 0, 1);
              return ;
            }
          }
          solve.finish();
        }
      },
      useItem : function(item, num) {
        for (var i = 0; i < num; ++i) {
          if (solve.strife(solve.player, item)) {
            use(item);
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
