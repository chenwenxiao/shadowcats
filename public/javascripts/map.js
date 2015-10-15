define([], function() {
  var map = {
    background : {
      src : ''
    },

    items : [
      {
        type : 'player',
        id : 0,
        x : 100,
        y : 100,
        width : 100,
        height : 100,
        stable : false,
        gravity : true,
        src : ''
      },
      {
        type : 'ground',
        id : 1,
        x : 0,
        y : 0,
        width : 100,
        height : 100,
        stable : true,
        gravity : false,
        src : ''
      },
      {
        type : 'box',
        id : 2,
        x : 50,
        y : 50,
        width : 50,
        height : 50,
        stable : true,
        gravity : true,
        move : true,
        src : ''
      },
      {
        type : 'ladder',
        id : 3,
        x : 100,
        y : 100,
        width : 100,
        height : 100,
        stable : false,
        gravity : false,
        climb : true,
        src : ''
      },
      {
        type : 'knob',
        id : 4,
        x : 100,
        y : 100,
        width : 100,
        height : 100,
        stable : false,
        gravity : true,
        targets : [5],
        status : false,
        src : ''
      },
      {
        type : 'door',
        id : 5,
        x : 100,
        y : 100,
        width : 100,
        height : 100,
        stable : true,
        gravity : true,
        status : true,
        src : ''
      }
    ]
  };
  return map;
});
