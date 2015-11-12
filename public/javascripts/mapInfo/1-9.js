  var map = {
    round : 0,
    index : 0,
    code : 'solve.right 100\n\
solve.left 190\n\
solve.useItem 5\n\
solve.up 100\n\
solve.right 40\n\
solve.useItem 4\n',
    tip : {
      title : '第九关：绕一圈',
      content : '绕一圈绕到目标：\n\
        solve.right 100\n\
        solve.left 190\n\
        solve.useItem 5\n\
        solve.up 100\n\
        solve.right 40\n\
        solve.useItem 4\n',
    },
    background : {
      src : "/images/1-9.png"
    },
    items : [
      {
        type : 'player',
        id : 0,
        x : 320,
        y : 155,
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
        x : 295,
        y : 0,
        width : 10,
        height : 200,
        stable : true,
        gravity : false,
        src : ''
      },
      {
        type : 'ground',
        id : 3,
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
        id : 4,
        x : 200,
        y : 160,
        width : 80,
        height : 40,
        stable : false,
        canuse : true,
        src : "/images/fish.png",
      },
      {
        type : 'ladder',
        id : 5,
        x : 150,
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
