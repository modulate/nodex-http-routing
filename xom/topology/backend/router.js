exports = module.exports = function(urlMap, NS, Stream) {
  var uri = require('url');
  
  return function(req, res, callback) {
    var hp = req.headers.host.split(':');
    var hostname = hp[0];
    var port = hp[1] || 80;
    var url = uri.parse(req.url);
    
    urlMap.get(url.pathname, hostname, function(err, service) {
      // TODO: error handling
      
      NS.resolve('_http._tcp.' + service + '.', 'SRV', function(err, records) {
        // TODO: error handling
        
        var record = records[0];
        
        NS.resolve(record.name, 'A', function(err, records) {
          // TODO: error handling
        
          var ip = records[0];
      
          var dst = Stream.create({ hostname: ip, port: record.port });
          //console.log(dst);
      
          var src = req.connection.__through;
          src.pipe(dst).pipe(req.connection);
        
        }); // A records
      }); // SRV records
    }); // URL map
  };
};

exports['@require'] = [
  'http://schema.modulate.io/js/http/routing/topology/backend/URLMap',
  'http://i.bixbyjs.org/ns',
  'http://i.bixbyjs.org/stream'
];
