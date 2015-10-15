define(['ace/ace', 'jquery'], function(ace, $) {
  var editor = ace.edit("editor");
      editor.setTheme("ace/theme/twilight");
      editor.session.setMode("ace/mode/javascript");
  return editor;
});
