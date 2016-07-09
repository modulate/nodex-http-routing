exports = module.exports = function() {
  var HostsTable = require('../../../../lib/table/hosts');
  
  return new HostsTable();
}

exports['@singleton'] = true;
exports['@implements'] = 'http://schemas.modulate.io/js/http/routing/topology/backend/HostsTable';
