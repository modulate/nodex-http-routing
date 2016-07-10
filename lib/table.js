// https://en.wikipedia.org/wiki/Routing_table
// https://en.wikipedia.org/wiki/Control_plane
function Table(instances, services, hosts) {
  this._instances = instances;
  this._urls = hosts;
  this._services = services;
}

Table.prototype.find = function(dest, cb) {
  console.log('ROUTING TO: ');
  console.log(dest)
  
  var service = this._urls.get(dest.path, dest.host);
  if (!service) { return cb(); }
  
  var srvs = this._services.find(service);
  if (!srvs) {
    // TODO 503 Service Unavailable
    return cb(new Error('Service unavailable: ' + dest.host));
  }
  
  console.log('GOT SERVICE ROUTES');
  console.log(srvs);
  
  var srv = srvs[0];
  console.log('SELECTED INSTANCE:');
  console.log(srv);
  
  var is = this._instances.find(srv.instance)
  
  console.log('GOT LOCATION');
  console.log(is);
  
  
  var routes = [ { hostname: dest.host, port: 80 } ];
  return cb(null, routes);
}


module.exports = Table;
