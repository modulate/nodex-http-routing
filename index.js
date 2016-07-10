exports = module.exports = function httpRouting(id) {
  var map = {
    'router': './xom/router',
    'routing/forwarding': './xom/routing/forwarding',
    'routing/table': './xom/routing/table',
    'routing/topology/backend/instances': './xom/routing/topology/backend/instances',
    'routing/topology/backend/services': './xom/routing/topology/backend/services',
    'routing/topology/backend/urls': './xom/routing/topology/backend/urls'
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
  container.add('routing/topology/backend/urls');
  container.add('routing/topology/backend/services');
  container.add('routing/topology/backend/instances');
  
  // TODO: Only add this is another implementation isn't available.
  container.add('routing/forwarding');
};
