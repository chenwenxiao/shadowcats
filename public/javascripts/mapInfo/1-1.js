  var map = {
    round : 0,
    index : 0,
    code : 'six = (one = 10) + (two = 20) + (three = 30)\n\
solve.left 65\n\
solve.use solve.map.items[1]\n\
solve.up 30\n\
list = [1, 2, 3, 4, 5]\n\
race = (winner, runners...) ->\n\
  print winner, runners\n',
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
        x : 400,
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
