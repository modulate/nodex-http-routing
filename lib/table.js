// https://en.wikipedia.org/wiki/Routing_table
// https://en.wikipedia.org/wiki/Control_plane
function Table(instances, services, hosts) {
  this._instances = instances;
  this._hosts = hosts;
  this._services = services;
}

Table.prototype.find = function(dest, cb) {
  console.log('ROUTING TO: ');
  console.log(dest)
  
  var route = this._hosts.find(dest.path, dest.host);
  console.log('GOT ROUTE: ');
  console.log(route)
  
  if (!route) { return cb(); }
  
  console.log('GOT SERVICE NAME');
  console.log(route);
  
  var srvs = this._services.find(route.service);
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
