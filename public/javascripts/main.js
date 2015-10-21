require.config({
  paths: {
    ace: '../libs/ace-build/src',
		bootstrap : '../libs/bootstrap/dist/js/bootstrap',
		jquery : '../libs/jquery/dist/jquery',
		snapsvg : '../libs/Snap.svg/dist/snap.svg',
		coffeescript : '../libs/coffee-script/extras/coffee-script'
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
