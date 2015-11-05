window.onload = function() {
  var stage = Cookies.get('stage');
  if (stage == "")
    stage = 1;
  var player;
  $('ellipse').each(function(){
    if (this.getAttribute('num') == stage) {
      var cx = this.getAttribute('x'), cy = this.getAttribute('y');
      var svg = Snap("#svg");
      player = svg.paper.image('images/player_in_bigmap.gif', cx, cy, 100, 100);
    }
  });
  $('ellipse').each(function() {
    stage = this.getAttribute('num');
    Cookies.set('stage', stage);
    this.addEventListener("click", function(){
      var old_cx = parseInt(player.attr('x'));
      var old_cy = parseInt(player.attr('y'));
      var new_cx = parseInt(player.attr('x'));
      var new_cy = parseInt(player.attr('y'));
      Snap.animate([old_cx, old_cy], [new_cx, new_cy], function (val){
        player.attr({
          x: val[0],
          y: val[1]
        });
      }, 1000, mina.linear, function() {
        window.location.href = 'game?stage=1-' + stage;
      });
    });
  });
}
