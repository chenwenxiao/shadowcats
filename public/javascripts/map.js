define(['jquery'], function($) {
  var str = $('#map').text();
  // 解析载入关卡地图json文件
  var map = JSON.parse(str);
  return map;
});
