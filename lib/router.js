exports = module.exports = function(forward, table) {
  var uri = require('url');
  
  return function(req, res) {
    var url = uri.parse(req.url);
    var info = {
      host: req.headers.host,
      path: url.pathname
    }
    
    function done(err) {
      console.log('DONE!');
      console.log(err);
      
      if (err) {
        // Only if !== 500 ??
        res.end(err.message);
      }
      
    }
    
    table.find(info, function(err, routes, ctx) {
      if (err) { return done(err); }
      forward(req, res, routes, ctx, done);
    });
  }
}
