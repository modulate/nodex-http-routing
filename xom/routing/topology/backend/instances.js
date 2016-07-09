exports = module.exports = function() {
  var InstancesTable = require('../../../../lib/table/instances');
  
  return new InstancesTable();
}

exports['@singleton'] = true;
exports['@implements'] = 'http://schemas.modulate.io/js/http/routing/topology/backend/InstancesTable';
