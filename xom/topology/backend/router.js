exports = module.exports = function(urlMap, NS, Stream) {
  var uri = require('url');
  
  
  urlMap.set('/', 'www.google.com', '1goog', function(){});
  
  //updater.set('1goog', 'SRV')
  
  NS.add('_http._tcp.1goog.', 'SRV', { name: 'si123', port: 80, priority: 10, weight: 10 }, function(){});
  
  
  return function(req, res, callback) {
    
    
    var hp = req.headers.host.split(':');
    var hostname = hp[0];
    var port = hp[1] || 80;
    
    console.log('BACKEND ROUTE!');
    console.log(hostname);
    console.log(req.url);
    
    
    var url = uri.parse(req.url);
    
    urlMap.get(url.pathname, hostname, function(err, service) {
      console.log(err);
      console.log(service);
      
      NS.resolve('_http._tcp.' + service + '.', 'SRV', function(err, records) {
        console.log('RESOLVED SERVICE');
        console.log(err);
        console.log(records);
        
      });
      
    });
    
    
    /*
    NS.resolve('_http._tcp.' + hostname, 'SRV', function(err, records) {
      console.log(err);
      console.log(records);
      
    });
    */
  };
};

exports['@require'] = [
  'http://schema.modulate.io/js/http/routing/topology/backend/URLMap',
  'http://i.bixbyjs.org/ns',
  'http://i.bixbyjs.org/stream'
];
