// https://en.wikipedia.org/wiki/Forwarding_plane
exports = module.exports = function(streams) {
  var uri = require('url');
  
  return function(req, res, routes, ctx, cb) {
    if (typeof ctx == 'function') {
      cb = ctx;
      ctx = undefined;
    }
    
    var src = req.connection.__through;
    var dst = streams.create(routes[0]);
    src.pipe(dst).pipe(req.connection);
  }
}
