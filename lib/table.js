// https://en.wikipedia.org/wiki/Routing_table
// https://en.wikipedia.org/wiki/Control_plane
function Table() {
}

Table.prototype.find = function(dest, cb) {
  var routes = [ { hostname: dest.host, port: 80 } ];
  return cb(null, routes);
}


module.exports = Table;
