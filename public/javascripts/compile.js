define(['editor', 'coffeescript', 'jquery', 'solve'], function(editor, coffeescript, $, solve) {
  $('#run').click(function() {
    var compiledJS;
    var session = editor.getSession();
    var coffeeCode = session.getDocument().getValue().split("\n");
    var realCode = "";
    for (var code in coffeeCode) {
      var str = coffeeCode[code];
      if (str[0] != ' ' && str[0] != '\t')
        realCode += "solve.setIndex " + code + " \n";
        //realCode += "session.clearBreakpoints" + "\n" + "session.setBreakpoint " + code + "\n" + "solve.sleep　500" + "\n";
      realCode += coffeeCode[code] + "\n";
    }
    compiledJS = coffeescript.compile(realCode, {
      bare : true
    });
    solve.init();
    eval(compiledJS);
    solve.startAnimate();
  });

});
