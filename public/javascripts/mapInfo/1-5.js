  var map = {
    round : 0,
    index : 0,
    stage : '1-5',
    code : 'solve.right 200\n\
solve.useItem 4\n',
    tip : {
      title : '第五关：推推推',
      content : '向右走推动箱子：\n\
      solve.left 200\n\
      solve.useItem 4\n',
    },
    background : {
      src : "/images/1-5.png"
    },
    items : [
      {
        type : 'player',
        id : 0,
        x : 40,
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
        x : 0,
        y : 200,
        width : 400,
        height : 10,
        stable : true,
        gravity : false,
        src : ''
      },
      {
        type : 'ground',
        id : 2,
        x : 400,
        y : 500,
        width : 200,
        height : 10,
        stable : true,
        gravity : false,
        src : ''
      },
      {
        type : 'box',
        id : 3,
        x : 300,
        y : 150,
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
        type : 'fish',
        id : 4,
        x : 420,
        y : 400,
        width : 80,
        height : 40,
        stable : false,
        canuse : true,
        src : "/images/fish.png",
      },
    ]
  };
module.exports = map;
