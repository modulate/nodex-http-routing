exports = module.exports = function() {
  var Table = require('../../lib/table');
  
  return new Table();
}

exports['@singleton'] = true;
exports['@implements'] = 'http://schemas.modulate.io/js/http/routing/Table';
