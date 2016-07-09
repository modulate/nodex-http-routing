exports = module.exports = function() {
  return require('../../lib/forwarding')();
}

exports['@singleton'] = true;
exports['@implements'] = 'http://schemas.modulate.io/js/http/routing/forwardingFunc';
