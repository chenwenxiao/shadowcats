var assert = require('assert');
var jsdom  = require('jsdom');

describe('test_map()', function() {
  it('test map 1-1 rounds', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-1',
    [],
    function(err, window) {
      console.log("round = " + window.require('map').round);
      assert.equal(window.require('map').round, 0);
    });
  });

  it('test map 1-1 player', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-1',
    [],
    function(err, window) {
      console.log("round = " + window.require('map').round);
      assert.equal(window.require('map').items[0].type, 'player');
    });
  });


  it('test map 1-1 stage', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-1',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      assert.equal(window.require('map').items[0].stage, '1-1');
    });
  });

  it('test map 1-1 background', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-1',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      assert.equal(window.require('map').items[0].background.src, '/images/1-1.png');
    });
  });
//---------------------------------------------------------------------
  it('test map 1-2 rounds', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-2',
    [],
    function(err, window) {
      console.log("round = " + window.require('map').round);
      assert.equal(window.require('map').round, 0);
    });
  });

  it('test map 1-2 player', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-2',
    [],
    function(err, window) {
      console.log("round = " + window.require('map').round);
      assert.equal(window.require('map').items[0].type, 'player');
    });
  });


  it('test map 1-2 stage', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-2',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      assert.equal(window.require('map').items[0].stage, '1-2');
    });
  });

  it('test map 1-2 background', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-2',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      assert.equal(window.require('map').items[0].background.src, '/images/1-3.png');
    });
  });
//---------------------------------------------------------------------

  it('test map 1-3 rounds', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-3',
    [],
    function(err, window) {
      console.log("round = " + window.require('map').round);
      assert.equal(window.require('map').round, 0);
    });
  });

  it('test map 1-3 player', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-3',
    [],
    function(err, window) {
      console.log("round = " + window.require('map').round);
      assert.equal(window.require('map').items[0].type, 'player');
    });
  });


  it('test map 1-3 stage', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-3',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      assert.equal(window.require('map').items[0].stage, '1-3');
    });
  });

  it('test map 1-3 background', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-3',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      assert.equal(window.require('map').items[0].background.src, '/images/1-3.png');
    });
  });
//---------------------------------------------------------------------

  it('test map 1-4 rounds', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-4',
    [],
    function(err, window) {
      console.log("round = " + window.require('map').round);
      assert.equal(window.require('map').round, 0);
    });
  });

  it('test map 1-4 player', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-4',
    [],
    function(err, window) {
      console.log("round = " + window.require('map').round);
      assert.equal(window.require('map').items[0].type, 'player');
    });
  });


  it('test map 1-4 stage', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-4',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      assert.equal(window.require('map').items[0].stage, '1-4');
    });
  });

  it('test map 1-4 background', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-4',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      assert.equal(window.require('map').items[0].background.src, '/images/1-4.png');
    });
  });
//---------------------------------------------------------------------
  it('test map 1-5 rounds', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-5',
    [],
    function(err, window) {
      console.log("round = " + window.require('map').round);
      assert.equal(window.require('map').round, 0);
    });
  });

  it('test map 1-5 player', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-5',
    [],
    function(err, window) {
      console.log("round = " + window.require('map').round);
      assert.equal(window.require('map').items[0].type, 'player');
    });
  });


  it('test map 1-5 stage', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-5',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      assert.equal(window.require('map').items[0].stage, '1-5');
    });
  });

  it('test map 1-5 background', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-5',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      assert.equal(window.require('map').items[0].background.src, '/images/1-5.png');
    });
  });
//---------------------------------------------------------------------

  it('test map 1-6 rounds', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-6',
    [],
    function(err, window) {
      console.log("round = " + window.require('map').round);
      assert.equal(window.require('map').round, 0);
    });
  });

  it('test map 1-6 player', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-6',
    [],
    function(err, window) {
      console.log("round = " + window.require('map').round);
      assert.equal(window.require('map').items[0].type, 'player');
    });
  });


  it('test map 1-6 stage', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-6',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      assert.equal(window.require('map').items[0].stage, '1-6');
    });
  });

  it('test map 1-6 background', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-6',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      assert.equal(window.require('map').items[0].background.src, '/images/1-6.png');
    });
  });
//---------------------------------------------------------------------

  it('test map 1-7 rounds', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-7',
    [],
    function(err, window) {
      console.log("round = " + window.require('map').round);
      assert.equal(window.require('map').round, 0);
    });
  });

  it('test map 1-7 player', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-7',
    [],
    function(err, window) {
      console.log("round = " + window.require('map').round);
      assert.equal(window.require('map').items[0].type, 'player');
    });
  });


  it('test map 1-7 stage', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-7',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      assert.equal(window.require('map').items[0].stage, '1-7');
    });
  });

  it('test map 1-7 background', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-7',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      assert.equal(window.require('map').items[0].background.src, '/images/1-7.png');
    });
  });
//---------------------------------------------------------------------

  it('test map 1-8 rounds', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-8',
    [],
    function(err, window) {
      console.log("round = " + window.require('map').round);
      assert.equal(window.require('map').round, 0);
    });
  });

  it('test map 1-8 player', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-8',
    [],
    function(err, window) {
      console.log("round = " + window.require('map').round);
      assert.equal(window.require('map').items[0].type, 'player');
    });
  });


  it('test map 1-8 stage', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-8',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      assert.equal(window.require('map').items[0].stage, '1-8');
    });
  });

  it('test map 1-8 background', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-8',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      assert.equal(window.require('map').items[0].background.src, '/images/1-8.png');
    });
  });
//---------------------------------------------------------------------

  it('test map 1-10 rounds', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-10',
    [],
    function(err, window) {
      console.log("round = " + window.require('map').round);
      assert.equal(window.require('map').round, 0);
    });
  });

  it('test map 1-10 player', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-10',
    [],
    function(err, window) {
      console.log("round = " + window.require('map').round);
      assert.equal(window.require('map').items[0].type, 'player');
    });
  });


  it('test map 1-10 stage', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-10',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      assert.equal(window.require('map').items[0].stage, '1-10');
    });
  });

  it('test map 1-10 background', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-10',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      assert.equal(window.require('map').items[0].background.src, '/images/1-10.png');
    });
  });
//---------------------------------------------------------------------

  it('test map 1-10 rounds', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-10',
    [],
    function(err, window) {
      console.log("round = " + window.require('map').round);
      assert.equal(window.require('map').round, 0);
    });
  });

  it('test map 1-10 player', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-10',
    [],
    function(err, window) {
      console.log("round = " + window.require('map').round);
      assert.equal(window.require('map').items[0].type, 'player');
    });
  });


  it('test map 1-10 stage', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-10',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      assert.equal(window.require('map').items[0].stage, '1-10');
    });
  });

  it('test map 1-10 background', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-10',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      assert.equal(window.require('map').items[0].background.src, '/images/1-10.png');
    });
  });
//---------------------------------------------------------------------

  it('test map 1-11 rounds', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-11',
    [],
    function(err, window) {
      console.log("round = " + window.require('map').round);
      assert.equal(window.require('map').round, 0);
    });
  });

  it('test map 1-11 player', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-11',
    [],
    function(err, window) {
      console.log("round = " + window.require('map').round);
      assert.equal(window.require('map').items[0].type, 'player');
    });
  });


  it('test map 1-11 stage', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-11',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      assert.equal(window.require('map').items[0].stage, '1-11');
    });
  });

  it('test map 1-11 background', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-11',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      assert.equal(window.require('map').items[0].background.src, '/images/1-11.png');
    });
  });
//---------------------------------------------------------------------

  it('test map 1-12 rounds', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-12',
    [],
    function(err, window) {
      console.log("round = " + window.require('map').round);
      assert.equal(window.require('map').round, 0);
    });
  });

  it('test map 1-12 player', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-12',
    [],
    function(err, window) {
      console.log("round = " + window.require('map').round);
      assert.equal(window.require('map').items[0].type, 'player');
    });
  });


  it('test map 1-12 stage', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-12',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      assert.equal(window.require('map').items[0].stage, '1-12');
    });
  });

  it('test map 1-12 background', function() {
    jsdom.env(
    'http://localhost:3000/game?stage=1-12',
    [],
    function(err, window) {
      console.log("svg" + window.$('#svg'));
      assert.equal(window.require('map').items[0].background.src, '/images/1-12.png');
    });
  });
//---------------------------------------------------------------------
});
