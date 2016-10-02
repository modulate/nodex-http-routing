exports = module.exports = function(forwarding, table) {
  return require('../lib/router')(forwarding, table);
}

exports['@implements'] = 'http://schema.modulate.io/js/http/Router';
exports['@singleton'] = true;
exports['@require'] = [
  'http://schemas.modulate.io/js/http/routing/forwardingFunc',
  'http://schemas.modulate.io/js/http/routing/Table'
];
