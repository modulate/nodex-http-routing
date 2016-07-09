exports = module.exports = function(forwarding, table) {
  return require('../lib/router')(forwarding, table);
}

exports['@singleton'] = true;
exports['@implements'] = 'http://schemas.modulate.io/js/http/Router';
exports['@require'] = [
  'http://schemas.modulate.io/js/http/routing/forwardingFunc',
  'http://schemas.modulate.io/js/http/routing/Table'
];
