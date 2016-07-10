exports = module.exports = function(forward, table) {
  var uri = require('url');
  var finalhandler = require('finalhandler');
  
  
  return function(req, res, callback) {
    // final handler
    var done = callback || finalhandler(req, res);
    
    var url = uri.parse(req.url);
    var info = {
      host: req.headers.host,
      path: url.pathname
    }
    
    table.find(info, function(err, routes, ctx) {
      console.log('--------');
      if (err) { return done(err); }
      forward(req, res, routes, ctx, done);
    });
  };
};
