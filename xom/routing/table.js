exports = module.exports = function(resolver, instances, services, hosts) {
  var Table = require('../../lib/table');
  
  return new Table(resolver, instances, services, hosts);
}

exports['@singleton'] = true;
exports['@implements'] = 'http://schemas.modulate.io/js/http/routing/Table';
exports['@require'] = [
  'http://i.bixbyjs.org/ns/Resolver',
  'http://schemas.modulate.io/js/http/routing/topology/backend/InstancesTable',
  'http://schemas.modulate.io/js/http/routing/topology/backend/ServicesTable',
  'http://schemas.modulate.io/js/http/routing/topology/backend/URLsMap'
];
