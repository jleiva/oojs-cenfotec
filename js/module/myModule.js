// module/lib is a dependency we require
var lib = require('lib');
 
// behaviour for our module
function foobar() {
  this.foo = function(){
    lib.log( "Hello foo" );
  }
 
  this.bar = function(){
    lib.log( "Hello bar" );
  }
}
 
// export (expose) foobar to other modules
exports.foobar = foobar;