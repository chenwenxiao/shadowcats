require.config({
  paths: {
    ace: '../libs/ace-build/src',
		bootstrap : '../libs/bootstrap/dist/js/bootstrap',
		jquery : '../libs/jquery/dist/jquery.min',
		snapsvg : '../libs/Snap.svg/dist/snap.svg',
		coffeescript : '../libs/coffee-script/extras/coffee-script',
    confirm: '../libs/jquery-confirm-action/jquery.confirm-action'
  },
  shim : {
    bootstrap : {
      deps : [ 'jquery' ],
      exports : 'bootstrap'
    }
  }
});

define(['compile', 'bootstrap'], function(compile, bootstrap) {

});
