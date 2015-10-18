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

      var o = this.judge(item);
      var nitem, flag = true;
      for (nitem in o) {
        if (!this.simulateMove(o[nitem], dx, dy))
          flag = false;
      }
      item.x = item.x - dx;
      item.y = item.y - dy;

      item_use = false;
      return true;
    },
    startAnimate : function() {
      setInterval(function(){
        if (this.round < map.round) {
          view.startAnimate(this.round);
          this.round++;
        }
      }, 50);
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
      $("#test").click(function(){
        //view.use(map.items[2]);
        view.move(map.items[0], 100, 0);
        view.move(map.items[0], 100, 100);
        // var now = new Date();
        // var exitTime = now.getTime() + 2000;
        // while (true) {
        //   now = new Date();
        //   if (now.getTime() > exitTime)
        //     break;
        // }
        // solve.startAnimate();
      });
      $("#go").click(function(){
        view.__use(map.items[2]);
      });

      this.player = this.findPlayers()[0];
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
        if (this.strife(map.items[nitem], item))
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
      var o = this.judge(item);
      for (var nitem in o) {
        this.move(o[nitem], dx, dy);
      }
      item._use = false;
      //view.move(item, dx, dy);
    },
    _move : function(item, dx, dy) {
      if (this.simulateMove(item, dx, dy)) {
        this.move(item, dx, dy);
      }
    },
    gravity : function(item) {
      this._move(item, 0, 1);
    },
    finish : function() {
      var item;
      for (item in map.items)
        this.gravity(map.items[item]);
      map.round++;
    },
    use : function(item) {
      var nitem;
      item._use = true;
      if (item.type == 'knob') {
        for (nitem in item.targets)
          if (!item.targets[nitem]._use) this.use(nitem);
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
          if (this.strife(this.player, map.items[item]))
            array.push(map.items[item]);
        }
        return array;
      },
      left : function(num) {
        for (var i = 0; i < num; ++i) {
          this._move(this.player, -1, 0);
          this.finish();
        }
      },
      right : function(num) {
        for (var i = 0; i < num; ++i) {
          this._move(this.player, 1, 0);
          this.finish();
        }
      },
      up : function(num) {
        for (var i = 0; i < num; ++i) {
          var o = findStrifes();
          var item;
          for (item in o) {
            if (o[item].climb) {
              this._move(this.player, 0, -1);
              return ;
            }
          }
          this.finish();
        }
      },
      down : function(num) {
        for (var i = 0; i < num; ++i) {
          var o = findStrifes();
          var item;
          for (item in o) {
            if (o[item].climb) {
              this._move(this.player, 0, 1);
              return ;
            }
          }
          this.finish();
        }
      },
      useItem : function(item, num) {
        for (var i = 0; i < num; ++i) {
          if (this.strife(this.player, item)) {
            use(item);
          }
          this.finish();
        }
      },
      wait : function(num) {
        for (var i = 0; i < num; ++i) {
          this.finish();
        }
      }

  };
  solve.init();
  return solve;
});
