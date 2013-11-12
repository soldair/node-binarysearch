var test = require('tap').test;
var bs = require('../index.js');

test("can insert",function(t){
  var arr = [1,2,4];
  var key = bs.insert(arr,3); 
  
  t.equals(arr.join(','),[1,2,3,4].join(','),' should have correct range');
  t.equals(key,2,'key should be 2');
  t.end();
});

test("can insert beginning",function(t){
  var arr = [2,3,4];
  var key = bs.insert(arr,1); 
  
  t.equals(arr.join(','),[1,2,3,4].join(','),' should have correct range');
  t.equals(key,0,'key should be 0');
  t.end();
});

test("can insert end",function(t){
  var arr = [2,3,4];
  var key = bs.insert(arr,5); 
  
  t.equals(arr.join(','),[2,3,4,5].join(','),' should have correct range');
  t.equals(key,3,'key shoiuld be 3');
  t.end();
});


test("inserts at end of same values",function(t){
  var arr = [{k:1,v:1},{k:2,v:2},{k:3,v:3}];
  var obj = {k:'hi',v:2};
  var key = bs.insert(arr,obj); 
  
  t.equals(arr[2],obj,' should have correct object at offset');
  t.equals(key,2,'key should be 2');
  t.end();
});

test("can handle numbers with big gaps",function(t){
  var arr = [ 1384217040821830, 1384217040822643, 1384217040825255 ];
  var obj = 1384217040826148;

  var key = bs.insert(arr,obj)
  t.equals(arr[3],obj,' should have correct object at offset');
  t.end();
})


