function URLsMap() {
  this._table = {};
}

URLsMap.prototype.get = function(path, host) {
  var h = this._table[host]
  if (!h) { return; }
  
  var comps = path.split('/')
    , prefix, p;
  
  do {
    prefix = comps.join('/') || '/';
    p = h.paths[prefix];
  } while (!p && comps.pop())
  
  return p;
}

URLsMap.prototype.set = function(path, host, service) {
  var h = this._table[host] = (this._table[host] || {});
  h.paths = h.paths || {};
  h.paths[path] = service;
  
  console.log('URLS IS NOW');
  console.log(require('util').inspect(this._table, 2, null));
}


module.exports = URLsMap;
