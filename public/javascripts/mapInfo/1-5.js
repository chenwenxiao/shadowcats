  var map = {
    round : 0,
    index : 0,
    code : 'for i in [0..4]\n\
    if (i & 1)\n\
        solve.left 250\n\
    else\n\
        solve.right 250\n\
solve.useItem 6\n',
    tip : {
      title : '第五关：跑跑跑',
      content : '是男人就下一百层：\n',
    },
    background : {
      src : "/images/1-5.png"
    },
    items : [
      {
        type : 'player',
        id : 0,
        x : 40,
        y : 50,
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
        x : 0,
        y : 100,
        width : 500,
        height : 10,
        stable : true,
        gravity : false,
        src : ''
      },
      {
        type : 'ground',
        id : 2,
        x : 100,
        y : 200,
        width : 500,
        height : 10,
        stable : true,
        gravity : false,
        src : ''
      },
      {
        type : 'ground',
        id : 3,
        x : 0,
        y : 300,
        width : 500,
        height : 10,
        stable : true,
        gravity : false,
        src : ''
      },
      {
        type : 'ground',
        id : 4,
        x : 100,
        y : 400,
        width : 500,
        height : 10,
        stable : true,
        gravity : false,
        src : ''
      },
      {
        type : 'ground',
        id : 5,
        x : 0,
        y : 500,
        width : 600,
        height : 10,
        stable : true,
        gravity : false,
        src : ''
      },
	  {
        type : 'fish',
        id : 6,
        x : 500,
        y : 460,
        width : 80,
        height : 40,
        stable : false,
        canuse : true,
        src : "/images/fish.png",
      },
    ]
  };
module.exports = map;
