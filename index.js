exports = module.exports = function httpRouting(id) {
  var map = {
    'router': './xom/router',
    'routing/forward': './xom/routing/forward',
    'routing/table': './xom/routing/table'
  };
  
  var mid = map[id];
  if (mid) {
    return require(mid);
  }
};

exports.used = function(container) {
  container.add('router');
  container.add('routing/table');
  container.add('routing/forward');
};
