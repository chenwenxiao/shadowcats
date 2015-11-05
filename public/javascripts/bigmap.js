window.onload = function() {
  var stage = Cookies.get('stage');
  if (stage == "")
    stage = 1;
  var player;
  $('[num]').each(function(){
    if (this.getAttribute('num') == stage) {
      var cx = this.getAttribute('cx'), cy = this.getAttribute('cy');
      var svg = Snap("svg");
      player = svg.paper.image('images/player_in_bigmap.gif', cx - 50, cy - 100, 100, 100);
    }
  });
  $('[num]').each(function() {
    var nstage = this.getAttribute('num');
    var new_cx = this.getAttribute('cx') - 50;
    var new_cy = this.getAttribute('cy') - 100;
    console.log(nstage);
    this.addEventListener("click", function(){
      Cookies.set('stage', nstage);
      var old_cx = parseInt(player.attr('x'));
      var old_cy = parseInt(player.attr('y'));
      var d = Math.sqrt((new_cx - old_cx) * (new_cx - old_cx) + (new_cy - old_cy) * (new_cy - old_cy));
      Snap.animate([old_cx, old_cy], [new_cx, new_cy], function (val){
        player.attr({
          x: val[0],
          y: val[1]
        });
      }, d * 10, mina.linear, function() {
        window.location.href = 'game?stage=1-' + nstage;
      });
    });
  });
}
