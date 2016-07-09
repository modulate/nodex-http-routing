exports = module.exports = function httpRouting(id) {
  var map = {
    'router': './xom/router',
    'routing/forwarding': './xom/routing/forwarding',
    'routing/table': './xom/routing/table',
    'routing/topology/backend/hosts': './xom/routing/topology/backend/hosts',
    'routing/topology/backend/services': './xom/routing/topology/backend/services'
  };
  
  var mid = map[id];
  if (mid) {
    return require(mid);
  }
};

exports.used = function(container) {
  container.add('router');
  
  // TODO: Only add this is another implementation isn't available.
  container.add('routing/table');
  container.add('routing/topology/backend/hosts');
  container.add('routing/topology/backend/services');
  
  // TODO: Only add this is another implementation isn't available.
  container.add('routing/forwarding');
};
