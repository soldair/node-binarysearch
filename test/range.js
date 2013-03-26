var test = require('tap').test;
var bs = require('../index.js');


test("can get last",function(t){

  var range = bs.range([1,2,3,3,3,4,4,6],3,4); 
  

  t.equals(range.join(','),[3,3,3,4,4].join(','),' should have correct range');

  t.end();
});
