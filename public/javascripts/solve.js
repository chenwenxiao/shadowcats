define(['map', 'view'], function(map, view) {
  var solve = {
    map : map,
    view : view,
    round : 0,
    simulate : {
      gravity : function(item) {
        if (item.gravity) {
          return move(item, 0, 1);
        }
        return false;
      },
      move : function(item, dx, dy) {
        if (!item.move)
          return false;
        item.x = item.x + dx;
        item.y = item.y + dy;
        var o = judge(item);
        var nitem, flag = true;
        for (nitem in o) {
          if (!move(nitem, dx, dy))
            flag = false;
        }
        if (!flag) {
          item.x = item.x - dx;
          item.y = item.y - dy;
        }
        return true;
      },
    },
    init : function() {
      // test code
      var map = {
        round : 0,
        background : {
          src : "/images/bg.jpg"
        },
        items : [
          {
            type : 'player',
            id : 0,
            x : 100,
            y : 100,
            width : 50,
            height : 50,
            stable : true,
            gravity : true,
            src : "/images/py.gif"
          },
          {
            type : 'knob',
            id : 4,
            x : 300,
            y : 300,
            width : 80,
            height : 80,
            stable : true,
            gravity : true,
            targets : [5],
            status : false,
            src : '/images/sw.jpg'
          },
          {
            type : 'door',
            id : 5,
            x : 400,
            y : 200,
            width : 50,
            height : 100,
            stable : true,
            gravity : true,
            status : true,
            src : '/images/dr.jpg'
          }
        ]
      };

      // function __move(item, dx, dy) {
      //   var startTime = map.round*1000;
      //   setTimeout(function(){
      //     view.move(item, dx, dy);
      //   }, startTime);
      // }

      view.init(map);
      $("#btn").click(function(){
        //view.use(map.items[2]);
        view.move(map.items[0], 100, 0);
        view.move(map.items[0], 100, 100);

        var now = new Date();
        var exitTime = now.getTime() + 2000;
        while (true) {
          now = new Date();
          if (now.getTime() > exitTime)
            break;
        }

        this.startAnimate();

      });
      $("#go").click(function(){
        view.use(map.items[2]);
        view.use(map.items[2]);
      });

      // player = findPlayers()[0];
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
        if (strife(nitem, item))
          array.push(nitem);
      }
      return array;
    },
    move : function(item, dx, dy) {
      item.x = item.x + dx;
      item.y = item.y + dy;
      var o = judge(item);
      var nitem;
      for (nitem in o) {
        move(nitem, dx, dy);
      }
      view.move(item, dx, dy);
    },
    _move : function(item, dx, dy) {
      if (simulate.move(item, dx, dy)) {
        move(item, dx, dy);
      }
    },
    gravity : function(item) {
      move(item, 0, 1);
    },
    _gravity : function(item) {
      if (simulate.gravity(item)) {
        gravity(item);
      }
    },
    finish : function() {
      var item;
      for (item in map.items)
        _gravity(item);
      map.round++;
    },
    use : function(item) {
      var nitem;
      item._use = true;
      if (item.type == 'knob') {
        for (nitem in item.targets)
          if (!nitem._use) use(nitem);
        view.use(item);
      }
      if (item.type == 'door') {
        if (item.status) {
          item.status = item.stable = false;
        } else {
          item.status = item.stable = true;
        }
        view.use(item, false);
      }
      item._use = false;
    },
    wait : function(msecs) {
      var start = new Date().getTime();
      var cur = start;
      while(cur - start < msecs)
        cur = new Date().getTime();
    },
    findPlayers : function() {
      var array = [];
      var item;
      for (item in map.items) {
        if (item.type == 'player')
          array.push(item);
      }
      return array;
    },
      findStrifes : function() {
        var array = [];
        var item;
        for (item in map.items) {
          if (strife(player, item))
            array.push(item);
        }
        return array;
      },
      left : function(num) {
        for (var i = 0; i < num; ++i) {
          this.move(player, -1, 0);
          finish();
        }
      },
      right : function(num) {
        for (var i = 0; i < num; ++i) {
          this.move(player, 1, 0);
          finish();
        }
      },
      up : function(num) {
          for (var i = 0; i < num; ++i) {
          var o = findStrifes();
          var item;
          for (item in o) {
            if (item.climb) {
              this.move(player, 0, -1);
              return ;
            }
          }
          finish();
        }
      },
      down : function(num) {
        for (var i = 0; i < num; ++i) {
          var o = findStrifes();
          var item;
          for (item in o) {
            if (item.climb) {
              this.move(player, 0, 1);
              return ;
            }
          }
          finish();
        }
      },
      useItem : function(item, num) {
        for (var i = 0; i < num; ++i) {
          if (strife(player, item)) {
            use(item);
          }
          finish();
        }
      },
      wait : function(num) {
        for (var i = 0; i < num; ++i) {
          finish();
        }
      },
      startAnimate : function() {
        setInterval(function(){
          if (this.round < map.round) {
            view.startAnimate(this.round);
            this.round++;
          }
        }, 50);
      }
  };
  solve.init();
  return solve;
});
