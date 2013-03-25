var test = require('tap').test;
var bs = require('../index.js');


test("can get last",function(t){
  var key = bs.last([1,2,3,3,3,4],3);

  console.log('last',key);

  t.equals(key,4,' should have got 4 as key because it is index of the last 3');

  t.end();
});
