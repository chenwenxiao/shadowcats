  var map = {
    round : 0,
    index : 0,
    stage : '1-12',
    code : 'solve.right 230\n\
solve.left 130\n\
solve.useItem 2\n\
solve.up 50\n\
solve.useItem 2\n\
solve.right 130\n\
solve.left 130\n\
solve.useItem 2\n\
solve.up 50\n\
solve.useItem 2\n\
solve.right 130\n\
solve.left 130\n\
solve.useItem 2\n\
solve.up 50\n\
solve.useItem 2\n\
solve.right 170\n\
solve.useItem 1\n',
    tip : {
      title : '第十二关：地下探险推推推',
      content : '要求：(TRY TO USE for & if)\n\
        solve.right 230\n\
solve.left 130\n\
solve.useItem 2\n\
solve.up 50\n\
solve.useItem 2\n\
solve.right 130\n\
solve.left 130\n\
solve.useItem 2\n\
solve.up 50\n\
solve.useItem 2\n\
solve.right 130\n\
solve.left 130\n\
solve.useItem 2\n\
solve.up 50\n\
solve.useItem 2\n\
solve.right 170\n\
solve.useItem 1\n',
    },
    background : {
      src : "/images/1-12.png"
    },
    items : [
      {
        type : 'player',
        id : 0,
        x : 0,
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
        type : 'fish',
        id : 1,
        x : 500,
        y : 210,
        width : 80,
        height : 40,
        stable : false,
        canuse : true,
        src : "/images/fish.png",
      },
      {
        type : 'ladder',
        id : 2,
        x : 210,
        y : 190,
        width : 10,
        height : 320,
        stable : false,
        gravity : false,
        canuse: true,
        src : "/images/string.png"
      },
      {
        type : 'box',
        id : 3,
        x : 300,
        y : 250,
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
        type : 'box',
        id : 5,
        x : 300,
        y : 450,
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
        type : 'box',
        id : 6,
        x : 400,
        y : 250,
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
        type : 'box',
        id : 7,
        x : 400,
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
        type : 'ground',
        id : 11,
        x : 0,
        y : 200,
        width : 100,
        height : 10,
        stable : true,
        gravity : false,
        src : ''
      },
      {
        type : 'ground',
        id : 12,
        x : 200,
        y : 200,
        width : 300,
        height : 10,
        stable : true,
        gravity : false,
        src : ''
      },
      {
        type : 'ground',
        id : 8,
        x : 200,
        y : 300,
        width : 300,
        height : 10,
        stable : true,
        gravity : false,
        src : ''
      },
      {
        type : 'ground',
        id : 9,
        x : 200,
        y : 400,
        width : 300,
        height : 10,
        stable : true,
        gravity : false,
        src : ''
      },
      {
        type : 'ground',
        id : 10,
        x : 0,
        y : 500,
        width : 600,
        height : 10,
        stable : true,
        gravity : false,
        src : ''
      }
    ]
  };
module.exports = map;
