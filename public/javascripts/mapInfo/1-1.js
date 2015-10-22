  var map = {
    round : 0,
    index : 0,
    background : {
      src : "/images/background.jpg"
    },
    items : [
      {
        type : 'player',
        id : 0,
        x : 350,
        y : 250,
        width : 50,
        height : 50,
        stable : true,
        gravity : true,
        move : true,
        vx : 0,
        vy : 0,
        src : "/images/py.gif"
      },
      {
        type : 'ground',
        id : 1,
        x : 300,
        y : 300,
        width : 300,
        height : 20,
        stable : true,
        gravity : false,
        src : ''
      },
      {
        type : 'ladder',
        id : 3,
        x : 220,
        y : 0,
        width : 100,
        height : 500,
        stable : false,
        gravity : false,
        src : ''
      },
      {
        type : 'knob',
        id : 4,
        x : 325,
        y : 275,
        width : 25,
        height : 25,
        stable : false,
        gravity : true,
        targets : [5],
        status : true,
        canuse : true,
        src : '/images/knob.jpg'
      },
      {
        type : 'door',
        id : 5,
        x : 400,
        y : 200,
        width : 50,
        height : 100,
        stable : true,
        status : true,
        src : '/images/dr.jpg'
      }
    ]
  };
module.exports = map;
