// NOTE: Can be used as a proxy
exports = module.exports = function(DNS, Stream) {
  
  return function(req, res, callback) {
    
    // https://tools.ietf.org/html/draft-andrews-http-srv-02
    // https://tools.ietf.org/html/draft-jennings-http-srv-05
    
    var hp = req.headers.host.split(':');
    var hostname = hp[0];
    var port = hp[1] || 80;
    
    console.log('SRV RECORD RESOLVE!');
    console.log(hostname)
    // TODO: Append '.' to hostname
    
    //DNS.resolve('_xmpp-client._tcp.' + hostname, 'SRV', function(err, records) {
    DNS.resolve('_http._tcp.pkg.pfsense.org.', 'SRV', function(err, records) {
      console.log(err);
      console.log(records);
      
      var rec = records[0];
      
      // NOTE: `connect` will do a further `A` or `AAAA` lookup, to resolve the hostname
      // to an IP address
      var dst = Stream.create({ hostname: rec.name, port: rec.port });
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
