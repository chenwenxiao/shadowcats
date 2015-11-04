  var map = {
    round : 0,
    index : 0,
    code : 'six = (one = 10) + (two = 20) + (three = 30)\n\
solve.left 67\n\
solve.use solve.map.items[2], 1\n\
solve.up 30\n\
list = [1, 2, 3, 4, 5]\n\
race = (winner, runners...) ->\n\
  print winner, runners\n',
    tip : {
      title : '跳崖指南',
      content : '向左前进即可，记得抓住绳子：\n\
      solve.left 60+\n\
      solve.use solve.map.items[2]\n\
      items[2] is a ladder\n'
    },
    background : {
      src : "/images/1-2.png"
    },
    items : [
      {
        type : 'player',
        id : 0,
        x : 500,
        y : 365,
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
        y : 200,
        width : 200,
        height : 10,
        stable : true,
        gravity : false,
        src : ""
      },
	  {
        type : 'ground',
        id : 2,
        x : 100,
        y : 400,
        width : 500,
        height : 10,
        stable : true,
        gravity : false,
        src : ""
      },
      {
        type : 'ladder',
        id : 3,
        x : 200,
        y : 180,
        width : 10,
        height : 200,
        stable : false,
        gravity : false,
        src : "/images/string.png"
      },
	  {
        type : 'fish',
        id : 4,
        x : 20,
        y : 165,
        width : 80,
        height : 40,
		stable : false,
		canuse : true,
        src : "/images/fish.png",
      }
    ]
  };
module.exports = map;
