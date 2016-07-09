exports = module.exports = function(streams) {
  return require('../../lib/forwarding')(streams);
}

exports['@singleton'] = true;
exports['@implements'] = 'http://schemas.modulate.io/js/http/routing/forwardingFunc';
exports['@require'] = [
  'http://i.bixbyjs.org/stream/Factory'
];
