var test = require('tap').test;
var bs = require('../index.js');

test("can handle strings",function(t){


  var key = bs(["a","b","cde","f"],"wtf")
  
  t.equals(key,-1,'should have found -1 for value wtf in string array');

  key = bs([1,2,3,4],"wtf");

  t.equals(key,-1,'should have found -1 for value "wtf" in numeric array');

  t.end();

});

