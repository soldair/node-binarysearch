var test = require('tap').test;
var bs = require('../index.js');

test("can get closest",function(t){
  var key = bs.closest([1,2,4,5,6],3);
  t.equals(key,1,' should have got 1 as key because 2 is the first vaule closest to 3');
  t.end();
});

test("can get closest with one item more",function(t){
  var key = bs.closest([3],1);
  t.equals(key,0,key+' should have got 0 as key even though there is only 1 and it is higher');
  t.end();
});

test("can get closest with one item less",function(t){
  var key = bs.closest([1],4);
  t.equals(key,0,key+' should have got 0 as key because there is only 1 and its less');
  t.end();
});

test("gets lowest number closest",function(t){
  var key = bs.closest([2,3,4,100],99);
  t.equals(key,2,key+' should have got key 2 because that is the last number before a number greater');
  t.end();
});

test("can get closest at end",function(t){
  var key = bs.closest([1,2,4,5,6],7);
  t.equals(key,4,key+' should have got 4 as key because it is the last');
  t.end();
});

// end sorted

test("can get closest end",function(t){
  var key = bs.closest([1,2,4,5,6],3,{end:true});
  t.equals(key,2,key+' should have got 2 as key because 4 is the last closest to 3');
  t.end();
});

test("can get closest end at end",function(t){
  var key = bs.closest([1,2,4,5,6],7,{end:true});
  t.equals(key,4,key+' should have got 4 as key because it is the last');
  t.end();
});

test("can get closest end at end",function(t){
  var key = bs.closest([2,2],2,{end:true});
  t.equals(key,1,key+' should have got key 1 because that is the last 2 and im going from end');
  t.end();
});

test("gets highest number closest with end",function(t){
  var key = bs.closest([2,3,4,100,100],99,{end:true});
  t.equals(key,3,key+' should have got key 3 because that is the closest number greater than the search');
  t.end();
});

test("closest returns -1 on empty array",function(t){
  var key = bs.closest([],99);
  t.equals(key,-1,key+' should be -1 because i have no data in the array to be close to');
  t.end();
});

