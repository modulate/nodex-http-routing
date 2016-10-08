function MemoryURLMap() {
  this._table = {};
}

MemoryURLMap.prototype.get = function(path, host, cb) {
  var h = this._table[host]
  if (!h) { return cb(); }
  
  var comps = path.split('/')
    , prefix, s;
  
  do {
    prefix = comps.join('/') || '/';
    s = h.paths[prefix];
  } while (!s && comps.pop())
  
  return cb(null, s);
}

MemoryURLMap.prototype.set = function(path, host, service, cb) {
  var h = this._table[host] = (this._table[host] || {});
  h.paths = h.paths || {};
  h.paths[path] = service;
  
  console.log('URLS IS NOW');
  console.log(require('util').inspect(this._table, 2, null));
  
  return cb();
}


module.exports = MemoryURLMap;
