// https://en.wikipedia.org/wiki/Routing_table
// https://en.wikipedia.org/wiki/Control_plane
function Table(instances, services, hosts) {
  this._instances = instances;
  this._urls = hosts;
  this._services = services;
}

Table.prototype.find = function(dest, cb) {
  console.log('--------');
  console.log(dest)
  
  var target = this._urls.get(dest.path, dest.host);
  if (!target) { return cb(); }
  
  console.log('-- target: ' + target)
  
  var instances = this._services.find(target);
  if (!instances) {
    // TODO 503 Service Unavailable
    return cb(new Error('Service unavailable: ' + dest.host));
  }
  
  console.log('-- instances');
  console.log(instances);
  
  var srv = instances[0];
  var is = this._instances.find(srv.id);
  
  console.log('GOT LOCATION');
  console.log(is);
  
  
  var routes = [ { hostname: dest.host, port: 80 } ];
  return cb(null, routes);
}


module.exports = Table;
