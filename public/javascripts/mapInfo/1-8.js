  var map = {
    round : 0,
    index : 0,
    stage : '1-8',
    code : 'solve.right 50\n\
solve.useItem 3\n\
solve.right 25\n\
solve.useItem 5\n\
solve.right 25\n\
solve.useItem 7\n\
solve.right 150\n\
solve.useItem 2\n',
    tip : {
      title : '第八关：开开开',
      content : '向右走依次打开门：\n\
        solve.right 50\n\
        solve.useItem 3\n\
        solve.right 25\n\
        solve.useItem 5\n\
        solve.right 25\n\
        solve.useItem 7\n\
        solve.right 150\n\
        solve.useItem 2\n',
    },
    background : {
      src : "/images/1-8.png"
    },
    items : [
      {
        type : 'player',
        id : 0,
        x : 0,
        y : 355,
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
        y : 400,
        width : 600,
        height : 10,
        stable : true,
        gravity : false,
        src : ''
      },
	  {
        type : 'fish',
        id : 2,
        x : 520,
        y : 360,
        width : 80,
        height : 40,
        stable : false,
        canuse : true,
        src : "/images/fish.png",
      },
      {
        type : 'knob',
        id : 3,
        x : 100,
        y : 350,
        width : 50,
        height : 50,
        stable : false,
        gravity : true,
        targets : [4, 6],
        status : true,
        canuse : true,
        src_closed : "/images/knob_closed.png",
        src_closing : "",
        src_opened : "/images/knob_closed.png",
        src_opening : ""
      },
      {
        type : 'door',
        id : 4,
        x : 350,
        y : 320,
        width : 50,
        height : 80,
        stable : true,
        status : true,
        src_closed : "/images/door_closed.png",
        src_closing : "",
        src_opened : "/images/door_opened.png",
        src_opening : ""
      },
      {
        type : 'knob',
        id : 5,
        x : 150,
        y : 350,
        width : 50,
        height : 50,
        stable : false,
        gravity : true,
        targets : [6, 8],
        status : true,
        canuse : true,
        src_closed : "/images/knob_closed.png",
        src_closing : "",
        src_opened : "/images/knob_closed.png",
        src_opening : ""
      },
      {
        type : 'door',
        id : 6,
        x : 400,
        y : 320,
        width : 50,
        height : 80,
        stable : true,
        status : true,
        src_closed : "/images/door_closed.png",
        src_closing : "",
        src_opened : "/images/door_opened.png",
        src_opening : ""
      },
      {
        type : 'knob',
        id : 7,
        x : 200,
        y : 350,
        width : 50,
        height : 50,
        stable : false,
        gravity : true,
        targets : [6],
        status : true,
        canuse : true,
        src_closed : "/images/knob_closed.png",
        src_closing : "",
        src_opened : "/images/knob_closed.png",
        src_opening : ""
      },
      {
        type : 'door',
        id : 8,
        x : 450,
        y : 320,
        width : 50,
        height : 80,
        stable : true,
        status : true,
        src_closed : "/images/door_closed.png",
        src_closing : "",
        src_opened : "/images/door_opened.png",
        src_opening : ""
      }

    ]
  };
module.exports = map;
