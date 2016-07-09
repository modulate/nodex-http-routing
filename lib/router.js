exports = module.exports = function(forward, table) {
  var uri = require('url');
  
  return function(req, res) {
    console.log('ROUTING REQUEST');
    console.log(req.url);
    
    var url = uri.parse(req.url);
    
    var info = {
      host: req.headers.host,
      path: url.pathname
    }
    
    function onerror(err) {
      console.log('ERROR!');
      console.log(err);
    }
    
    table.find(info, function(err, routes, ctx) {
      if (err) { return onerror(err); }
      forward(req, res, routes, ctx, onerror);
    });
  }
}
