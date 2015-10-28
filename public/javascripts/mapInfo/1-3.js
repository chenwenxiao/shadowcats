  var map = {
    round : 0,
    index : 0,
    code : 'solve.left 40\n',
    tip : {
      title : '开门开门',
      content : '向左走拨动开关开门：\n\
      solve.left 40+\n'
    },
    background : {
      src : "/images/background.jpg"
    },
    items : [
      {
        type : 'player',
        id : 0,
        x : 400,
        y : 250,
        width : 50,
        height : 50,
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
        src : ''
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
        id : 6,
        x : 350,
        y : 275,
        width : 30,
        height : 25,
        stable : false,
        gravity : true,
        targets : [5],
        status : true,
        canuse : true,
        src_closed : "/images/knob_closed.png",
        src_closing : "/images/knob_closing.gif",
        src_opened : "/images/knob_opened.png",
        src_opening : "/images/knob_opening.gif"
      },
      {
        type : 'knob',
        id : 4,
        x : 380,
        y : 275,
        width : 30,
        height : 25,
        stable : false,
        gravity : true,
        targets : [5],
        status : true,
        canuse : true,
        src_closed : "/images/knob_closed.png",
        src_closing : "/images/knob_closing.gif",
        src_opened : "/images/knob_opened.png",
        src_opening : "/images/knob_opening.gif"
      },
      {
        type : 'door',
        id : 5,
        x : 480,
        y : 200,
        width : 50,
        height : 100,
        stable : true,
        status : true,
        src_closed : "/images/door_closed.png",
        src_closing : "/images/door_closing.gif",
        src_opened : "/images/door_opened.png",
        src_opening : "/images/door_opening.gif"
      },
      {
        type : 'door',
        id : 7,
        x : 550,
        y : 200,
        width : 50,
        height : 100,
        stable : true,
        status : true,
        src_closed : "/images/door_closed.png",
        src_closing : "/images/door_closing.gif",
        src_opened : "/images/door_opened.png",
        src_opening : "/images/door_opening.gif"
      }
    ]
  };
module.exports = map;
