define(['editor', 'coffeescript', 'jquery', 'solve'], function(editor, coffeescript, $, solve) {
  $('#run').click(function() {
    var compiledJS;
    var session = editor.getSession();
    var coffeeCode = session.getDocument().getValue().split("\n");
    var realCode = "";
    for (var code in coffeeCode) {
      var str = coffeeCode[code];
      if (str[0] != ' ' && str[0] != '\t')
        realCode += "solve.setIndex " + code + " \n";
        //realCode += "session.clearBreakpoints" + "\n" + "session.setBreakpoint " + code + "\n" + "solve.sleep　500" + "\n";
      realCode += coffeeCode[code] + "\n";
    }
    compiledJS = coffeescript.compile(realCode, {
      bare : true
    });
    solve.init();
    eval(compiledJS);
    solve.startAnimate();
  });

});

define(['ace/ace', 'jquery'], function(ace, $) {
  var editor = ace.edit("editor");
      editor.setTheme("ace/theme/twilight");
      editor.session.setMode("ace/mode/coffee");
  return editor;
});

require.config({
  paths: {
    ace: '../libs/ace-build/src',
		bootstrap : '../libs/bootstrap/dist/js/bootstrap',
		jquery : '../libs/jquery/dist/jquery',
		snapsvg : '../libs/Snap.svg/dist/snap.svg',
		coffeescript : '../libs/coffee-script/extras/coffee-script'
  }
});

define(['compile', 'bootstrap'], function(compile, bootstrap) {
  
});

define(['jquery'], function($) {
  var str = $('#map').text();
  var map = JSON.parse(str);
  return map;
});

  //
  // var map = {
  //   round : 0,
  //
  //   background : {
  //     src : ''
  //   },
  //
  //   items : [
  //     {
  //       type : 'player',
  //       id : 0,
  //       x : 100,
  //       y : 100,
  //       width : 100,
  //       height : 100,
  //       stable : false,
  //       gravity : true,
  //       src : ''
  //     },
  //     {
  //       type : 'ground',
  //       id : 1,
  //       x : 0,
  //       y : 0,
  //       width : 100,
  //       height : 100,
  //       stable : true,
  //       gravity : false,
  //       src : ''
  //     },
  //     {
  //       type : 'box',
  //       id : 2,
  //       x : 50,
  //       y : 50,
  //       width : 50,
  //       height : 50,
  //       stable : true,
  //       gravity : true,
  //       move : true,
  //       src : ''
  //     },
  //     {
  //       type : 'ladder',
  //       id : 3,
  //       x : 100,
  //       y : 100,
  //       width : 100,
  //       height : 100,
  //       stable : false,
  //       gravity : false,
  //       src : ''
  //     },
  //     {
  //       type : 'knob',
  //       id : 4,
  //       x : 100,
  //       y : 100,
  //       width : 100,
  //       height : 100,
  //       stable : false,
  //       gravity : true,
  //       targets : [5],
  //       status : false,
  //       src : ''
  //     },
  //     {
  //       type : 'door',
  //       id : 5,
  //       x : 100,
  //       y : 100,
  //       width : 100,
  //       height : 100,
  //       stable : true,
  //       gravity : true,
  //       status : true,
  //       src : ''
  //     }
  //   ]
  // };


var box2d;

collie.util.addEventListener(window, "load", function () {
	oConsole = new collie.FPSConsole({
		isSimple : true,
		color : "#fff"
	});
	var htParams = collie.util.queryString();
	var htSize = {
		width : document.body.clientWidth,
		height : document.body.clientHeight
	};
		
	collie.Renderer.DEBUG_RENDERING_MODE = typeof htParams.dom != "undefined" ? "dom" : (typeof htParams.canvas != "undefined" ? "canvas" : "auto");
	collie.Renderer.RETINA_DISPLAY = false;
	collie.ImageManager.add("yame", "/images/yame_walk.png");
	
	
	var layer = new collie.Layer({
		width : htSize.width,
		height : htSize.height
	});

	box2d = new collie.Box2d(htSize.width, htSize.height, 30);
	box2d.addFixture("rabbit", {
		density : 1.0,
		friction : 0.5,
		restitution : 0
	});
	box2d.addFixture("ground", {
		density : 1.0,
		friction : 0.5,
		restitution : 0.2
	});

	box2d.createWall("right");
	box2d.createWall("left");
	box2d.createWall("top");
	box2d.createWall("bottom", "ground");
	
	var rabbit;
	var body;
	var player;
	
	for (var i = 0; i < 2; i++) {
		rabbit = new collie.DisplayObject({
  			width : 129.4,
    		height : 165,
			x : Math.random() * (htSize.width - 129.4) | 0,
			y : Math.random() * (htSize.height - 165) | 0,
			useEvent : true,
			backgroundImage : "yame",
			hitArea : [[48, 51],[46, 13],[54, 14],[56, 45],[70, 45],[70, 16],[79, 16],[79, 52],[81, 131],[81, 140],[69, 141],[66, 117],[65, 142],[53, 144],[52, 111],[45, 97],[44, 74]]
		}).addTo(layer);
		collie.Timer.cycle(rabbit, "18fps", {
			to : 8
		});
		body = box2d.createObject(rabbit, {
			width : 50,
			height : 130
		}, "rabbit");
	}
	
	// 마지막으로 생성된 토끼가 플레이어
	player = body;
	player.SetFixedRotation(true);
	
	var htKeyPressed = {
		left : false,
		right : false
	};
	
	var oMouseJoint = null;
	
	layer.attach({
		mousedown : function (e) {
			if (e.displayObject) {
				var target = box2d.getBody(e.displayObject);
				oMouseJoint = box2d.createMouseJoint(target, collie.Box2d.vec2(e.x, e.y, true), {
					maxForce : 300.0 * target.GetMass()
				});
				
				target.SetAwake(true);
			}
		},
		mousemove : function (e) {
			if (oMouseJoint) {
				oMouseJoint.SetTarget(collie.Box2d.vec2(e.x, e.y, true));
			}
		},
		mouseup : function (e) {
			if (oMouseJoint) {
				box2d.removeJoint(oMouseJoint);
				oMouseJoint = null;
			}
		},
		click : function (e) {
			var rabbit = new collie.DisplayObject({
	  			width : 129.4,
	    		height : 165,
				x : e.x - 129.4 / 2,
				y : e.y - 165 / 2,
				useEvent : true,
				backgroundImage : "yame",
				hitArea : [[48, 51],[46, 13],[54, 14],[56, 45],[70, 45],[70, 16],[79, 16],[79, 52],[81, 131],[81, 140],[69, 141],[66, 117],[65, 142],[53, 144],[52, 111],[45, 97],[44, 74]]
			}).addTo(layer);
			collie.Timer.cycle(rabbit, "18fps", {
				to : 8
			});
			var body = box2d.createObject(rabbit, {
				width : 50,
				height : 130
			}, "rabbit");
		}
	});
	
	collie.util.addEventListener(document.body, "keydown", function (e) {
	var keyCode = e.keyCode || e.key.charCodeAt(0);
		player.SetAwake(true);
		switch (keyCode) {
			case 68 : //right
				htKeyPressed.right = true;
				break;
				
			case 65 : //left
				htKeyPressed.left = true;
				break;
				
			case 87 : //top
				var velocity = player.GetLinearVelocity();
				player.SetLinearVelocity(collie.Box2d.vec2(velocity.x, -15), player.GetWorldCenter());
				break;
		}
	});
	
	collie.util.addEventListener(document.body, "keyup", function (e) {
	var keyCode = e.keyCode || e.key.charCodeAt(0);
		var velocity = player.GetLinearVelocity();
		
		switch (keyCode) {
			case 68 : //right
				htKeyPressed.right = false;
				player.SetLinearVelocity(collie.Box2d.vec2(0, velocity.y));
				break;
				
			case 65 : //left
				htKeyPressed.left = false;
				player.SetLinearVelocity(collie.Box2d.vec2(0, velocity.y));
				break;
		}
	});
	
	oConsole.load();
	collie.Renderer.addLayer(layer);
	collie.Renderer.load(document.getElementById("collie_container"));
	collie.Renderer.start("30fps", function () {
		var velocity = player.GetLinearVelocity();
		
		if (htKeyPressed.left) {
			player.SetLinearVelocity(collie.Box2d.vec2(-10, velocity.y));
		}
		if (htKeyPressed.right) {
			player.SetLinearVelocity(collie.Box2d.vec2(10, velocity.y));
		}
	});
	box2d.load(false);
});

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

define(['map', 'jquery', 'snapsvg'], function(map, $, snapsvg) {
  var item_list = [];
  var stack = [];

  function init(map) {
    stack = [];
    item_list = [];

    var svg = Snap("#svg");
    var background = svg.paper.image(map.background.src, 0, 0, 600, 600);
    item_list.push(background);
    for (var i in map.items) {
      var nitem = map.items[i];
      if(nitem.type == 'player') {
        var player = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        item_list.push({id: nitem.id, obj: player, type : 'player'});
      }
      else if(nitem.type == 'ground') {
        var ground = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        item_list.push({id: nitem.id, obj: ground, type : 'ground'});
      }
      else if(nitem.type == 'box') {
        var box = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        item_list.push({id: nitem.id, obj: box, type : 'box'});
      }
      else if(nitem.type == 'ladder') {
        var ladder = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        item_list.push({id: nitem.id, obj: ladder, type : 'ladder'});
      }
      else if(nitem.type == 'knob') {
        if(nitem.status == true) {
          var knob = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        }
        else {
          var knob = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        }
        item_list.push({id: nitem.id, obj: knob, type : 'knob'});
      }
      else if(nitem.type == 'door') {
        if(nitem.status == true) {
          var door = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        }
        else {
          var door = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        }
        item_list.push({id: nitem.id, obj: door, type : 'door'});
      }
      else {
        console.log("error, unknown item in initialization");
      }
    }
    console.log("init...finished...");
  };
  function __move(id, x, y) {
    for (var i in item_list) {
      if (id == item_list[i].id) {
        var old_cx = parseInt(item_list[i].obj.attr("x"));
		    var old_cy = parseInt(item_list[i].obj.attr("y"));
		    var new_cx = x;
		    var new_cy = y;
		    Snap.animate([old_cx, old_cy], [new_cx, new_cy], function (val){
          item_list[i].obj.attr({
            x: val[0],
            y: val[1]
          });
        }, 10);
        break;
      }
    }
    console.log("one move...done...");
  };
  function __use(id) {
    for (var i in item_list) {
      if(id == item_list[i].id && item_list[i].type == 'door') {
        var old_cx = parseInt(item_list[i].obj.attr("x"));
        var old_cy = parseInt(item_list[i].obj.attr("y"));

        var rot = 0;
        Snap.animate(rot+0, rot+45, function(val) {
          rot = val;
          item_list[i].obj.transform(new Snap.Matrix().rotate(val, old_cx, old_cy));
        }, 1000);

        break;
      }
    }
    console.log("one use...done...");
  };

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
  // add movement task to stack, calculate data but without running the animations;
  function move(item) {
    while (stack.length <= map.round) stack.push([]);
    var flag = false;
    stack[map.round].forEach(function(val){
      if (val.id == item.id && val.type == 'move') {
        flag = true;
        val.x = item.x, val.y += item.y;
      }
    });
    if (!flag) stack[map.round].push({id : item.id, x : item.x, y : item.y, type : 'move'});
  };
  function use(item) {
    while (stack.length <= map.round) stack.push([]);
    stack[map.round].push({id : item.id, type : 'use'});
  };

  return {
    init : init,
    move : move,
    use : use,
    __use : __use,
    startAnimate : startAnimate

  };
});
