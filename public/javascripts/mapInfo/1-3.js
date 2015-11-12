  var map = {
    round : 0,
    index : 0,
    code : 'solve.left 142\n\
solve.useItem 3\n\
solve.up 100\n\
solve.useItem 3\n\
solve.left 60\n\
solve.useItem 4\n',
    tip : {
      title : '第三关指南',
      content : '向左前进，抓住绳子向上爬，到达目标：\n\
      solve.left 142\n\
      solve.useItem 3\n\
      items[3] is a ladder, rewrite this code when you don\'t want to use it.\n\
      solve.up 100\n\
      solve.useItem 3\n\
      solve.left 60\n\
      solve.useItem 4\n'
    },
    background : {
      src : "/images/1-3.png"
    },
    items : [
      {
        type : 'player',
        id : 0,
        x : 460,
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
        x : 190,
        y : 180,
        width : 10,
        height : 220,
        stable : false,
        gravity : false,
        canuse: true,
        src : "/images/string.png"
      },
	  {
        type : 'fish',
        id : 4,
        x : 20,
        y : 160,
        width : 80,
        height : 40,
		    stable : false,
		    canuse : true,
        src : "/images/fish.png",
      }
    ]
  };
module.exports = map;
