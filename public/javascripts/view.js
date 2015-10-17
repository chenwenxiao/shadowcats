define(['map', 'jquery', 'snapsvg'], function(map, $, snapsvg) {

  function init(map) {
    var svg = Snap("#svg");
    var subj = [];
    var bg = svg.paper.image(map.background.src, 0, 0, 600, 600);

    for (var i in map.items) {
      var nitem = map.items[i];
      if (nitem.stable == true) {
        if(nitem.type == 'player') {
          var player = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        }
        else if(nitem.type == 'ground') {
          var ground = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        }
        else if(nitem.type == 'box') {
          var box = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        }
        else if(nitem.type == 'ladder') {
          var ladder = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
        }
        else if(nitem.type == 'knob') {
          if(nitem.status == true) {
            var knob = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
          }
          else {
            var knob = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
          }
        }
        else if(nitem.type == 'door') {
          if(nitem.status == true) {
            var door = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
          }
          else {
            var door = svg.paper.image(nitem.src, nitem.x, nitem.y, nitem.width, nitem.height);
          }
        }
        else {
          console.log("error, unknown item in initialization");
        }
      }
    }


    console.log("init...finish...");
  };
  function move(item, dx, dy) {

  };
  function use(item) {


  };
  return {
    init : init,
    move : move,
    use : use
  };
});
