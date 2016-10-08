exports = module.exports = function() {
  var MemoryURLMap = require('../../../lib/topology/backend/urlmap/memory');
  
  return new MemoryURLMap();
}

exports['@implements'] = 'http://schema.modulate.io/js/http/routing/topology/backend/URLMap';
exports['@singleton'] = true;
