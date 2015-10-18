define(['editor', 'coffeescript', 'jquery', 'solve'], function(editor, coffeescript, $, solve) {
  $('#run').click(function() {
    var compiledJS;
    compiledJS = coffeescript.compile(editor.getSession().getDocument().getValue(), {
      bare : true
    });
    solve.init();
    eval(compiledJS);
    solve.startAnimate();
  });
});
