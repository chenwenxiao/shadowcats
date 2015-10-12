
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
