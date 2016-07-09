// https://en.wikipedia.org/wiki/Forwarding_plane
exports = module.exports = function(table) {
  var uri = require('url');
  
  return function(req, res, routes, ctx, cb) {
    if (typeof ctx == 'function') {
      cb = ctx;
      ctx = undefined;
    }
    
    console.log('FORWARDING')
    console.log(routes);
    console.log(ctx);
  }
}
