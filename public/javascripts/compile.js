define(['editor', 'coffeescript', 'jquery', 'solve'], function(editor, coffeescript, $, solve) {
  $('#run').click(function() {
    var compiledJS;
    var session = editor.getSession();
    var coffeeCode = session.getDocument().getValue().split("\n");
    var realCode = "";
    for (var code in coffeeCode) {
      var str = coffeeCode[code];
      var _str = str.replace(/(\d)\.times->/g, "for __i in [1..$1]");
      if (str[0] != ' ' && str[0] != '\t')
        realCode += "solve.setIndex " + code + " \n";
        //realCode += "session.clearBreakpoints" + "\n" + "session.setBreakpoint " + code + "\n" + "solve.sleep　500" + "\n";
      realCode += _str + "\n";
    }
    compiledJS = coffeescript.compile(realCode, {
      bare : true
    });
    //solve.init();
    eval(compiledJS);
    solve.startAnimate(coffeeCode.length);
  });
  $('#left').click(function() {
    editor.clearSelection();
    editor.insert("\nsolve.left nums");
    editor.selectMore(0, true);
    editor.focus();
  });
  $('#right').click(function() {
    editor.clearSelection();
    editor.insert("\nsolve.right nums");
    editor.selectMore(0, true);
    editor.focus();
  });
  $('#useItem').click(function() {
    editor.clearSelection();
    editor.insert("\nsolve.useItem itemId");
    editor.selectMore(0, true);
    editor.focus();
  });
  $('#recycle').click(function() {
    editor.insert("\nfor i in [1..sup]");
    editor.insert("\n\tDoSth");
    editor.focus();
  });
  editor.getSession().getDocument().setValue(solve.map.code);
  $('.tutor').attr('title', solve.map.tip.title);
  $('.tutor').attr('data-content', solve.map.tip.content);
  $('.tutor').popover();
  $("#close").click(function(){
    $('.tutor').animate({bottom: '-100px'});
    $(".tutor").popover('disable');
  });
  $('.tutor').click(function(){
    var value = $('.tutor').css("bottom");
    if (value != "0px") {
      $(".tutor").popover('enable');
      $('.tutor').animate({bottom: '0px'});
    }
  });

});
