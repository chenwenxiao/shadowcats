define(['editor', 'coffee', 'jquery', 'solve'], function(editor, coffee, $, solve) {
  $('#run').click = function() {
    var compiledJS;
    compiledJS = CoffeeScript.compile(editor.editor.getSession().getDocument().getValue(), {
      bare : true
    });
    eval(compiledJS);
  }
});
