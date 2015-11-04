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
      src : "/images/1-1.png"
    },
    items : [
      {
        type : 'player',
        id : 0,
        x : 100,
        y : 210,
        width : 50,
        height : 45,
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
        x : 0,
        y : 205,
        width : 100,
        height : 10,
        stable : true,
        gravity : false,
        src : ""
      },
	  {
        type : 'ground',
        id : 2,
        x : 100,
        y : 255,
        width : 100,
        height : 10,
        stable : true,
        gravity : false,
        src : ""
      },
	  {
        type : 'ground',
        id : 3,
        x : 200,
        y : 305,
        width : 100,
        height : 10,
        stable : true,
        gravity : false,
        src : ""
      },
	  {
        type : 'ground',
        id : 4,
        x : 300,
        y : 355,
        width : 100,
        height : 10,
        stable : true,
        gravity : false,
        src : ""
      },
	  {
        type : 'ground',
        id : 5,
        x : 400,
        y : 405,
        width : 100,
        height : 10,
        stable : true,
        gravity : false,
        src : ""
      },
	  {
        type : 'ground',
        id : 6,
        x : 500,
        y : 455,
        width : 100,
        height : 10,
        stable : true,
        gravity : false,
        src : ""
      },
      {
        type : 'ladder',
        id : 7,
        x : 220,
        y : 400,
        width : 10,
        height : 100,
        stable : false,
        gravity : false,
        src : "/images/string.png"
      },
      {
        type : 'knob',
        id : 8,
        x : 325,
        y : 275,
        width : 50,
        height : 50,
        stable : false,
        gravity : true,
        targets : [5],
        status : true,
        canuse : true,
        src_closed : "/images/knob_closed.png",
        src_closing : "",
        src_opened : "",
        src_opening : ""
      },
      {
        type : 'door',
        id : 9,
        x : 500,
        y : 200,
        width : 50,
        height : 80,
        stable : true,
        status : true,
        src_closed : "/images/door_closed.png",
        src_closing : "",
        src_opened : "",
        src_opening : ""
      },
	  {
        type : 'fish',
        id : 10,
        x : 520,
        y : 410,
        width : 80,
        height : 40,
		stable : false,
		canuse : true,
        src : "/images/fish.png",
      },
	  {
        type : 'stone',
        id : 11,
        x : 10,
        y : 130,
        width : 80,
        height : 75,
        stable : true,
        src : "/images/stone.png"
      }
    ]
  };
module.exports = map;
