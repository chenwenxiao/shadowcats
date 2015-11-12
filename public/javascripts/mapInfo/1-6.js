  var map = {
    round : 0,
    index : 0,
    stage : '1-6',
    code : 'solve.left 50\n\
solve.useItem 3\n\
solve.left 50\n\
solve.useItem 5\n\
solve.left 150\n\
solve.useItem 2\n',
    tip : {
      title : '第六关：开开开',
      content : '向左走依次打开门：\n\
        solve.left 50\n\
        solve.useItem 3\n\
        solve.left 50\n\
        solve.useItem 5\n\
        solve.left 150\n\
        solve.useItem 2\n',
    },
    background : {
      src : "/images/1-6.png"
    },
    items : [
      {
        type : 'player',
        id : 0,
        x : 500,
        y : 255,
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
        y : 300,
        width : 600,
        height : 10,
        stable : true,
        gravity : false,
        src : ''
      },
	  {
        type : 'fish',
        id : 2,
        x : 0,
        y : 260,
        width : 80,
        height : 40,
        stable : false,
        canuse : true,
        src : "/images/fish.png",
      },
      {
        type : 'knob',
        id : 3,
        x : 400,
        y : 250,
        width : 50,
        height : 50,
        stable : false,
        gravity : true,
        targets : [4],
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
        x : 200,
        y : 220,
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
        x : 300,
        y : 250,
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
        id : 6,
        x : 100,
        y : 220,
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
