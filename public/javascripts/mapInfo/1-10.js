  var map = {
    round : 0,
    index : 0,
    stage : '1-10',
    code : 'solve.left 200\n\
solve.right 150\n\
solve.useItem 5\n\
solve.up 100\n\
solve.useItem 5\n\
solve.left 180\n\
solve.useItem 3\n',
    tip : {
      title : '第十关：要推还要爬还要跳',
      content : 'Tips：\n\
        solve.left 200\n\
        solve.right 150\n\
        solve.useItem 5\n\
        solve.up 100\n\
        solve.useItem 5\n\
        solve.left 180\n\
        solve.useItem 3\n',
    },
    background : {
      src : "/images/1-10.png"
    },
    items : [
      {
        type : 'player',
        id : 0,
        x : 520,
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
        x : 150,
        y : 200,
        width : 300,
        height : 10,
        stable : true,
        gravity : false,
        src : ''
      },
      {
        type : 'ground',
        id : 2,
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
        id : 3,
        x : 50,
        y : 310,
        width : 80,
        height : 40,
        stable : false,
        canuse : true,
        src : "/images/fish.png",
      },
      {
        type : 'box',
        id : 4,
        x : 300,
        y : 350,
        vx : 0,
        vy : 0,
        width : 50,
        height : 50,
        stable : true,
        gravity : true,
        move : true,
        src : '/images/box.png'
      },
      {
        type : 'ladder',
        id : 5,
        x : 430,
        y : 190,
        width : 10,
        height : 220,
        stable : false,
        gravity : false,
        canuse: true,
        src : "/images/string.png"
      }
    ]
  };
module.exports = map;
