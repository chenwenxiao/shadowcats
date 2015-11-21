var assert = require('assert');
var jsdom  = require('jsdom');

describe('test_solve()', function() {
  it('test solve 1-1 player', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-1',
    [],
    function(err, window) {
      console.log("round = " + window.require('solve').round);
      if (window.require('solve').player == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-1 map', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-1',
    [],
    function(err, window) {
      console.log("round = " + window.require('solve').round);
      if (window.require('solve').map == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });


  it('test solve 1-1 view', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-1',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').view == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-1 round', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-1',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').round == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });


  it('test solve 1-1 index', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-1',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').index == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-1 shadow', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-1',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').shadow == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });
//---------------------------------------------------------------------
  it('test solve 1-2 player', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-2',
    [],
    function(err, window) {
      console.log("round = " + window.require('solve').round);
      if (window.require('solve').player == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-2 map', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-2',
    [],
    function(err, window) {
      console.log("round = " + window.require('solve').round);
      if (window.require('solve').map == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });


  it('test solve 1-2 view', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-2',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').view == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-2 round', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-2',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').round == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });


  it('test solve 1-2 index', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-2',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').index == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-2 shadow', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-2',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').shadow == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });
//---------------------------------------------------------------------
  it('test solve 1-3 player', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-3',
    [],
    function(err, window) {
      console.log("round = " + window.require('solve').round);
      if (window.require('solve').player == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-3 map', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-3',
    [],
    function(err, window) {
      console.log("round = " + window.require('solve').round);
      if (window.require('solve').map == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });


  it('test solve 1-3 view', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-3',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').view == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-3 round', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-3',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').round == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });


  it('test solve 1-3 index', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-3',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').index == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-3 shadow', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-3',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').shadow == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });
//---------------------------------------------------------------------
  it('test solve 1-4 player', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-4',
    [],
    function(err, window) {
      console.log("round = " + window.require('solve').round);
      if (window.require('solve').player == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-4 map', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-4',
    [],
    function(err, window) {
      console.log("round = " + window.require('solve').round);
      if (window.require('solve').map == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });


  it('test solve 1-4 view', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-4',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').view == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-4 round', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-4',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').round == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });


  it('test solve 1-4 index', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-4',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').index == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-4 shadow', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-4',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').shadow == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });
//---------------------------------------------------------------------
  it('test solve 1-5 player', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-5',
    [],
    function(err, window) {
      console.log("round = " + window.require('solve').round);
      if (window.require('solve').player == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-5 map', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-5',
    [],
    function(err, window) {
      console.log("round = " + window.require('solve').round);
      if (window.require('solve').map == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });


  it('test solve 1-5 view', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-5',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').view == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-5 round', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-5',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').round == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });


  it('test solve 1-5 index', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-5',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').index == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-5 shadow', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-5',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').shadow == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });
//---------------------------------------------------------------------
  it('test solve 1-6 player', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-6',
    [],
    function(err, window) {
      console.log("round = " + window.require('solve').round);
      if (window.require('solve').player == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-6 map', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-6',
    [],
    function(err, window) {
      console.log("round = " + window.require('solve').round);
      if (window.require('solve').map == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });


  it('test solve 1-6 view', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-6',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').view == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-6 round', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-6',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').round == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });


  it('test solve 1-6 index', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-6',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').index == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-6 shadow', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-6',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').shadow == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });
//---------------------------------------------------------------------
  it('test solve 1-7 player', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-7',
    [],
    function(err, window) {
      console.log("round = " + window.require('solve').round);
      if (window.require('solve').player == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-7 map', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-7',
    [],
    function(err, window) {
      console.log("round = " + window.require('solve').round);
      if (window.require('solve').map == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });


  it('test solve 1-7 view', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-7',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').view == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-7 round', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-7',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').round == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });


  it('test solve 1-7 index', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-7',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').index == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-7 shadow', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-7',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').shadow == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });
//---------------------------------------------------------------------
  it('test solve 1-8 player', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-8',
    [],
    function(err, window) {
      console.log("round = " + window.require('solve').round);
      if (window.require('solve').player == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-8 map', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-8',
    [],
    function(err, window) {
      console.log("round = " + window.require('solve').round);
      if (window.require('solve').map == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });


  it('test solve 1-8 view', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-8',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').view == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-8 round', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-8',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').round == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });


  it('test solve 1-8 index', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-8',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').index == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-8 shadow', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-8',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').shadow == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });
//---------------------------------------------------------------------
  it('test solve 1-9 player', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-9',
    [],
    function(err, window) {
      console.log("round = " + window.require('solve').round);
      if (window.require('solve').player == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-9 map', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-9',
    [],
    function(err, window) {
      console.log("round = " + window.require('solve').round);
      if (window.require('solve').map == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });


  it('test solve 1-9 view', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-9',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').view == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-9 round', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-9',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').round == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });


  it('test solve 1-9 index', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-9',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').index == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-9 shadow', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-9',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').shadow == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });
//---------------------------------------------------------------------
  it('test solve 1-10 player', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-10',
    [],
    function(err, window) {
      console.log("round = " + window.require('solve').round);
      if (window.require('solve').player == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-10 map', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-10',
    [],
    function(err, window) {
      console.log("round = " + window.require('solve').round);
      if (window.require('solve').map == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });


  it('test solve 1-10 view', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-10',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').view == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-10 round', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-10',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').round == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });


  it('test solve 1-10 index', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-10',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').index == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-10 shadow', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-10',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').shadow == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });
//---------------------------------------------------------------------
  it('test solve 1-11 player', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-11',
    [],
    function(err, window) {
      console.log("round = " + window.require('solve').round);
      if (window.require('solve').player == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-11 map', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-11',
    [],
    function(err, window) {
      console.log("round = " + window.require('solve').round);
      if (window.require('solve').map == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });


  it('test solve 1-11 view', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-11',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').view == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-11 round', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-11',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').round == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });


  it('test solve 1-11 index', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-11',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').index == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-11 shadow', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-11',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').shadow == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });
//---------------------------------------------------------------------
  it('test solve 1-12 player', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-12',
    [],
    function(err, window) {
      console.log("round = " + window.require('solve').round);
      if (window.require('solve').player == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-12 map', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-12',
    [],
    function(err, window) {
      console.log("round = " + window.require('solve').round);
      if (window.require('solve').map == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });


  it('test solve 1-12 view', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-12',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').view == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-12 round', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-12',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').round == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });


  it('test solve 1-12 index', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-12',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').index == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });

  it('test solve 1-12 shadow', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-12',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      if (window.require('solve').shadow == undefined)
        assert.equal(1, 0);
      else
        assert.equal(0, 0);
    });
  });
//---------------------------------------------------------------------
});
