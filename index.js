exports = module.exports = function httpRouting(id) {
  var map = {
    'router': './xom/router'
  };
  
  var mid = map[id];
  if (mid) {
    return require(mid);
  }
};

exports.used = function(container) {
  container.add('router');
};
