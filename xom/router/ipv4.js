exports = module.exports = function(DNS, Stream) {
  
  return function(req, res, callback) {
    
    // https://tools.ietf.org/html/draft-andrews-http-srv-02
    // https://tools.ietf.org/html/draft-jennings-http-srv-05
    
    var hp = req.headers.host.split(':');
    var hostname = hp[0];
    var port = hp[1] || 80;
    
    console.log(hostname);
    
    DNS.resolve(hostname, 'A', function(err, records) {
      var ip = records[0];
      
      var dst = Stream.create({ hostname: ip, port: port });
      //console.log(dst);
      
      var src = req.connection.__through;
      src.pipe(dst).pipe(req.connection);
      
    });
    
  };
};

exports['@require'] = [
  'http://i.bixbyjs.org/dns',
  'http://i.bixbyjs.org/stream'
];
