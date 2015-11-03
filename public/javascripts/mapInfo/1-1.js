  var map = {
    round : 0,
    index : 0,
    code : 'six = (one = 10) + (two = 20) + (three = 30)\n\
solve.right three\n',
    tip : {
      title : '第一关指南',
      content : '向右前进即可：\n\
      solve.right 30\n'
    },
    background : {
      src : "/images/background.jpg"
    },
    items : [
      {
        type : 'player',
        id : 0,
        x : 350,
        y : 250,
        width : 200,
        height : 180,
        stable : true,
        gravity : true,
        move : true,
        vx : 0,
        vy : 0,
        src_walk_front : "/images/player_walk_front.gif",
        src_walk_back : "/images/player_walk_back.gif",
        src_walk_left : "/images/player_walk_left.gif",
        src_walk_right : "/images/player_walk_right.gif",
        src_stand_front : "/images/player_stand_front.png",
        src_stand_back : "/images/player_stand_back.png",
        src_stand_left : "/images/player_stand_left.png",
        src_stand_right : "/images/player_stand_right.png"
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
        src : ""
      },
      {
        type : 'ladder',
        id : 3,
        x : 220,
        y : 400,
        width : 50,
        height : 100,
        stable : false,
        gravity : false,
        src : ''
      },
      {
        type : 'knob',
        id : 4,
        x : 325,
        y : 275,
        width : 30,
        height : 25,
        stable : false,
        gravity : true,
        targets : [5],
        status : true,
        canuse : true,
        src_closed : "",
        src_closing : "",
        src_opened : "",
        src_opening : ""
      },
      {
        type : 'door',
        id : 5,
        x : 500,
        y : 200,
        width : 50,
        height : 100,
        stable : true,
        status : true,
        src_closed : "",
        src_closing : "",
        src_opened : "",
        src_opening : ""
      }
    ]
  };
module.exports = map;
