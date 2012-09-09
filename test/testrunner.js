#!/usr/bin/env node

var testrunner = require( "qunit" ),

path = require( "path" ).normalize( __dirname + "/.." );
    
testrunner.setup({

});

var mockserver = require("./mockserver").app;

mockserver.listen(30045);

testrunner.run([
        {
            code: path + "/lib/crawler.js",
            tests: [
              //path + "/test/units/forceutf8.js",
              //path + "/test/units/simple.js",
              path + "/test/units/errors.js"
            ]
        }    
],function() {
  console.log("Closing server...");
  mockserver.close();
});
