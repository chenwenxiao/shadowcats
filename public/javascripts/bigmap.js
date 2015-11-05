window.onload = function() {
  $('ellipse').each(function() {
    this.addEventListener("click", function(){
      window.location.href = 'game?stage=1-' + this.getAttribute('num');
    });
  });
}
