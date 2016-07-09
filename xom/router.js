exports = module.exports = function() {
  return require('../lib/router')();
}

exports['@singleton'] = true;
exports['@implements'] = 'http://schemas.modulate.io/js/http/Router';
exports['@require'] = [];
