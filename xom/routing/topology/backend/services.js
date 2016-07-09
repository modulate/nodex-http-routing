exports = module.exports = function() {
  var ServicesTable = require('../../../../lib/table/services');
  
  return new ServicesTable();
}

exports['@singleton'] = true;
exports['@implements'] = 'http://schemas.modulate.io/js/http/routing/topology/backend/ServicesTable';
