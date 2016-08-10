var errors = require('http-errors');

// https://en.wikipedia.org/wiki/Routing_table
// https://en.wikipedia.org/wiki/Control_plane
function Table(resolver, instances, services, hosts) {
  this._ns = resolver;
  
  this._instances = instances;
  this._urls = hosts;
  this._services = services;
}

Table.prototype.find = function(dest, cb) {
  console.log('--------');
  console.log(dest)
  
  // TODO: Equiv to SOA? (don't make return value a string??)
  var target = this._urls.get(dest.path, dest.host);
  if (!target) { return cb(); }
  
  console.log('-- target: ' + target)
  
  console.log('TODO: Switch to naming services');
  
  var ns = this._ns;
  
  ns.resolve(target, 'I', function(err, records) {
    console.log('Resolved: I');
    console.log(err, records);
    
  });
  
  
  return;
  
  
  /// Q: <service: passport-www-0a21> <type: INST>
  // /ns/passport-www-0a21/INST/passport-www-0a21.8af3
  var instances = this._services.find(target);
  if (!instances) {
    // TODO: Send the service name for auto-warming
    return cb(new errors.ServiceUnavailable('Service unavailable'));
  }
  
  console.log('-- instances');
  console.log(instances);
  
  /// Q: <service: passport-www-0a21.@http> <type: LOC>
  // /ns/passport-www-0a21.@http/INST/passport-www-0a21._tcp._http
  // --> SRV, URI, SVCINFO
  var instance = instances[0];
  var is = this._instances.find(instance.instance + '.' + '_http');
  
  console.log('GOT LOCATION');
  console.log(is);
  
  
  var routes = [ { hostname: dest.host, port: 80 } ];
  return cb(null, routes);
}


module.exports = Table;
