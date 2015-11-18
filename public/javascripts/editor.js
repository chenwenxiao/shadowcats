define(['ace/ace', 'jquery'], function(ace, $) {
  // 代码编辑器初始化（属性设定）
  var editor = ace.edit("editor");
      editor.setTheme("ace/theme/twilight");
      editor.session.setMode("ace/mode/coffee");
  return editor;
});
