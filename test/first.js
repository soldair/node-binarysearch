var test = require('tap').test;
var bs = require('../index.js');

test("can get first",function(t){
  var key = bs.first([1,2,3,3,3,4],3)
  t.equals(key,2,' should have got 2 as key because it is index of the first 3');

  t.end();
});

test("can get first if first",function(t){
  var key = bs.first([0,1,1,1,3,4],1)
  t.equals(key,1,' should have got 1 as key because it is index of the first 1');

  t.end();
});
