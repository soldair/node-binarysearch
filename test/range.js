var test = require('tap').test;
var bs = require('../index.js');

test("can get range",function(t){

  var range = bs.rangeValue([1,2,3,3,3,4,4,6,6],3,5); 
  
  t.equals(range.join(','),[3,3,3,4,4].join(','),' should have correct range');

  t.end();
});

test("can get range from beginning",function(t){

  var range = bs.rangeValue([2,3,3,3,6,6],0,3); 

  t.equals(range.join(','),[2,3,3,3].join(','),' should have correct range');

  t.end();
});

test("get empty range if no range is available",function(t){

  var range = bs.rangeValue([6,6,6],7,9); 

  t.equals(range.join(','),'',' should have correct range');

  t.end();
});

test("get range of one if one",function(t){

  var range = bs.rangeValue([6,6,8],7,9); 

  t.equals(range.join(','),'8',' should have correct range');

  t.end();
});

