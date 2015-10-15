
define(['editor', 'coffeescript', 'jquery', 'solve'], function(editor, coffeescript, $, solve) {
  $('#run').click = function() {
    var compiledJS;
    compiledJS = coffeescript.compile(editor.editor.getSession().getDocument().getValue(), {
      bare : true
    });
    eval(compiledJS);
  };
});

define(['ace', 'jquery'], function(ace, $) {
  var editor = ace.edit("editor");
      editor.setTheme("ace/theme/twilight");
      editor.session.setMode("ace/mode/javascript");
  return editor;
});

require.config({
  paths: {
    ace: 'public/libs/ace/lib/ace/ace.js',
		bootstrap : 'public/libs/bootstrap/dist/js/bootstrap.js',
		jquery : 'public/libs/jquery/dist/jquery.js',
		snapsvg : 'public/libs/Snap.svg/dist/snap.svg.js',
		coffeescript : 'public/libs/coffee-script/lib/coffee-script/coffee-script.js'
  }
});

define(['compile', 'bootstrap'], function(compile, bootstrap) {

});

define([], function() {
  var map = {
    background : {
      src : ''
    },

    items : [
      {
        type : player,
        id : 0,
        x : 100,
        y : 100,
        width : 100,
        height : 100,
        stable : false,
        gravity : true,
        src : ''
      },
      {
        type : ground,
        id : 1,
        x : 0,
        y : 0,
        width : 100,
        height : 100,
        stable : true,
        gravity : false,
        src : ''
      },
      {
        type : box,
        id : 2,
        x : 50,
        y : 50,
        width : 50,
        height : 50,
        stable : true,
        gravity : true,
        move : true,
        src : ''
      },
      {
        type : ladder,
        id : 3,
        x : 100,
        y : 100,
        width : 100,
        height : 100,
        stable : false,
        gravity : false,
        climb : true,
        src : ''
      },
      {
        type : knob,
        id : 4,
        x : 100,
        y : 100,
        width : 100,
        height : 100,
        stable : false,
        gravity : true,
        targets : [5],
        status : false,
        src : ''
      },
      {
        type : door,
        id : 5,
        x : 100,
        y : 100,
        width : 100,
        height : 100,
        stable : true,
        gravity : true,
        status : true,
        src : ''
      }
    ]
  };
  return map;
});


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

define(['map', 'view'], function(map, view) {
  var solve = {
    map : map,
    view : view,
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
      view.init(map);
      act.init();
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
      view.draw(map);
      wait(50);
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
    act : {
      init : function() {
        player = findPlayers()[0];
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
          move(player, -1, 0);
          finish();
        }
      },
      right : function(num) {
        for (var i = 0; i < num; ++i) {
          move(player, 1, 0);
          finish();
        }
      },
      up : function(num) {
          for (var i = 0; i < num; ++i) {
          var o = findStrifes();
          var item;
          for (item in o) {
            if (item.climb) {
              move(player, 0, -1);
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
              move(player, 0, 1);
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
    },
  };
  return solve;
});
