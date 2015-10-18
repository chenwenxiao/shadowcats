define(['map', 'jquery', 'snapsvg'], function(map, $, snapsvg) {
  var item_list = [];
  function init(map) {
    var svg = Snap("#svg");
    var background = svg.paper.image(map.background.src, 0, 0, 600, 600);
    item_list.push(background);
    for (var i in map.items) {
      var nitem = map.items[i];
      if(nitem.type == 'player') {
        var player = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        item_list.push({id: nitem.id, obj: player});
      }
      else if(nitem.type == 'ground') {
        var ground = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        item_list.push({id: nitem.id, obj: ground});
      }
      else if(nitem.type == 'box') {
        var box = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        item_list.push({id: nitem.id, obj: box});
      }
      else if(nitem.type == 'ladder') {
        var ladder = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        item_list.push({id: nitem.id, obj: ladder});
      }
      else if(nitem.type == 'knob') {
        if(nitem.status == true) {
          var knob = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        }
        else {
          var knob = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        }
        item_list.push({id: nitem.id, obj: knob});
      }
      else if(nitem.type == 'door') {
        if(nitem.status == true) {
          var door = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        }
        else {
          var door = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        }
        item_list.push({id: nitem.id, obj: door});
      }
      else {
        console.log("error, unknown item in initialization");
      }
    }
    console.log("init...finished...");
  };
  function __move(item, dx, dy) {
    for (var i in item_list) {
      if(item.id == item_list[i].id) {
        var old_cx = parseInt(item_list[i].obj.attr("x"));
		    var old_cy = parseInt(item_list[i].obj.attr("y"));
		    var new_cx = old_cx + dx;
		    var new_cy = old_cy + dy;
		    Snap.animate([old_cx, old_cy], [new_cx, new_cy], function (val){
          item_list[i].obj.attr({
            x: val[0],
            y: val[1]
          });
        }, 1000);
        break;
      }
    }
    console.log("one move...done...");
  };
  function __use(item) {
    for (var i in item_list) {
      if(item.id == item_list[i].id && item.type == 'door') {
        // var old_cx = parseInt(item_list[i].obj.attr("x"));
        // var old_cy = parseInt(item_list[i].obj.attr("y"));
        // var new_cx = old_cx + dx;
        // var new_cy = old_cy + dy;
        var rot = 0;
        Snap.animate(rot+0, rot+45, function(val) {
          rot = val;
          item_list[i].obj.transform(new Snap.Matrix().rotate(val, 50, 50));
        }, 1000);
        break;
      }
    }
    console.log("one use...done...");
  };

  var stack = [];
  function startAnimate(round) {
    stack[round].each(function(val) {
      switch (val) {
        case 'move':
          __move(val.item, val.dx, val.dy);
          break;
        case 'use':
          __use(val.item);
        default:
      }
    });
  };
  // add movement task to stack, calculate data but without running the animations;
  function move(item, dx, dy) {
    while (stack.length <= map.round) stack.push([]);
    stack[map.round].push({item : item, dx : dx, dy : dy, type : 'move'});
  };
  function use(item) {
    while (stack.length <= map.round) stack.push([]);
    stack[map.round].push({item : item, type : 'use'});
  };

  return {
    init : init,
    move : move,
    use : use
  };
});
