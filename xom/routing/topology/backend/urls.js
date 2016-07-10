exports = module.exports = function() {
  var URLsMap = require('../../../../lib/table/urls');
  
  return new URLsMap();
}

exports['@singleton'] = true;
exports['@implements'] = 'http://schemas.modulate.io/js/http/routing/topology/backend/URLsMap';
