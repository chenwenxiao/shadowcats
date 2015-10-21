define(['map', 'jquery', 'snapsvg'], function(map, $, snapsvg) {
  var item_list = [];
  var stack = [];

  function init(map) {
    stack = [];
    item_list = [];

    var svg = Snap("#svg");
    var background = svg.paper.image(map.background.src, 0, 0, 600, 600);
    item_list.push(background);
    var player;
    for (var i in map.items) {
      var nitem = map.items[i];
      if(nitem.type == 'player') {
        player = svg.paper.image(nitem.src_stand_front, nitem.x, nitem.y, nitem.width, nitem.height);
        item_list.push({id: nitem.id, obj: player, type : 'player',
                        src_walk_front : nitem.src_stand_front,
                        src_walk_back : nitem.src_walk_back,
                        src_walk_left : nitem.src_walk_left,
                        src_walk_right : nitem.src_walk_right,
                        src_stand_front : nitem.src_stand_front,
                        src_stand_back : nitem.src_stand_back,
                        src_stand_left : nitem.src_stand_left,
                        src_stand_right : nitem.src_stand_right});
        background.after(player);
      }
      else if(nitem.type == 'ground') {
        var ground = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        background.after(ground);
        player.before(ground);
        item_list.push({id: nitem.id, obj: ground, type : 'ground'});
      }
      else if(nitem.type == 'box') {
        var box = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        background.after(box);
        player.before(box);
        item_list.push({id: nitem.id, obj: box, type : 'box'});
      }
      else if(nitem.type == 'ladder') {
        var ladder = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        background.after(ladder);
        player.before(ladder);
        item_list.push({id: nitem.id, obj: ladder, type : 'ladder'});
      }
      else if(nitem.type == 'knob') {
        if(nitem.status == true) {
          var knob = svg.paper.image(nitem.src_closed, nitem.x, nitem.y, nitem.width, nitem.height);
        }
        else {
          var knob = svg.paper.image(nitem.src_opened, nitem.x, nitem.y, nitem.width, nitem.height);
        }
        background.after(knob);
        player.before(knob);
        item_list.push({id: nitem.id, obj: knob, type : 'knob',
                        status : nitem.status,
                        src_closed : nitem.src_closed,
                        src_closing : nitem.src_closing,
                        src_opened : nitem.src_opened,
                        src_opening : nitem.src_opening});
      }
      else if(nitem.type == 'door') {
        if(nitem.status == true) {
          var door = svg.paper.image(nitem.src_closed, nitem.x, nitem.y, nitem.width, nitem.height);
        }
        else {
          var door = svg.paper.image(nitem.src_opened, nitem.x, nitem.y, nitem.width, nitem.height);
        }
        background.after(door);
        player.before(door);
        item_list.push({id: nitem.id, obj: door, type : 'door',
                        status : nitem.status,
                        src_closed : nitem.src_closed,
                        src_closing : nitem.src_closing,
                        src_opened : nitem.src_opened,
                        src_opening : nitem.src_opening});
      }
      else {
        console.log("error, unknown item in initialization.");
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
        var choose_src;
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
        var set = {
          "xlink:href": choose_src,
          preserveAspectRatio: "none"
        };
　　　　　　　　Snap._.$(item_list[i].obj.node, set);
		    Snap.animate([old_cx, old_cy], [new_cx, new_cy], function (val){
          item_list[i].obj.attr({
            x: val[0],
            y: val[1]
          });
        }, 10);
        break;
      }
    }
  };
  function __use(id) {
    for (var i in item_list) {
      if(id == item_list[i].id) {
        var old_cx = parseInt(item_list[i].obj.attr("x"));
		    var old_cy = parseInt(item_list[i].obj.attr("y"));
        var choose_src;
        if(item_list[i].status == true) {
          choose_src = item_list[i].src_closing;
        }
        else {
          choose_src = item_list[i].src_opening;
        }
        Snap.animate([old_cx, old_cy], [old_cx, old_cy], function (){
          item_list[i].obj.attr({
            src: choose_src
          });
        }, 25);
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
    startAnimate : startAnimate

  };
});
