  var map = {
    round : 0,
    index : 0,
    stage : '1-1',
    code : 'solve.useItem 2\n',
    tip : {
      title : '第一关指南：我要赢',
      content : '获胜判定，对小鱼useItem：2\n\
      solve.useItem 2\n'
    },
    background : {
      src : "/images/1-1.png"
    },
    items : [
      {
        type : 'player',
        id : 0,
        x : 275,
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
        x : 100,
        y : 300,
        width : 400,
        height : 10,
        stable : true,
        gravity : false,
        src : ""
      },
	  {
        type : 'fish',
        id : 2,
        x : 260,
        y : 260,
        width : 80,
        height : 40,
		stable : false,
		canuse : true,
        src : "/images/fish.png",
      },
	  {
        type : 'stone',
        id : 3,
        x : 100,
        y : 225,
        width : 80,
        height : 75,
        stable : true,
        src : "/images/stone.png"
      },
      {
        type : 'stone',
        id : 4,
        x : 420,
        y : 225,
        width : 80,
        height : 75,
        stable : true,
        src : "/images/stone.png"
      }
    ]
  };
module.exports = map;
