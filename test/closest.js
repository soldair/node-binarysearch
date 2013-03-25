var test = require('tap').test;
var bs = require('../index.js');

test("can get closest",function(t){
  var key = bs.closest([1,2,4,5,6],3);
  t.equals(key,1,' should have got 1 as key because it is the first valule closest to 3');
  t.end();
});

test("can get closest end",function(t){
  var key = bs.closest([1,2,4,5,6],3,{end:true});
  t.equals(key,2,key+' should have got 2 as key because it is the last closest to 3');
  t.end();
});
