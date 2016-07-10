exports = module.exports = function() {
  var URLsTable = require('../../../../lib/table/urls');
  
  return new URLsTable();
}

exports['@singleton'] = true;
exports['@implements'] = 'http://schemas.modulate.io/js/http/routing/topology/backend/URLsTable';
