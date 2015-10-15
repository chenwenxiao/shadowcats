define(['map', 'jquery', 'snapsvg'], function(map, $, snapsvg) {
  function init(map) {
    var svg = Snap("#svg");
    var ground = svg.paper.rect(0, 0, 600, 600);
    ground.attr({
      fill: "#77FF00"
    });

    // for (var nitem in map.items) {
    //   if (strife(nitem, item))
    //     array.push(nitem);
    // }
    // return array;


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
