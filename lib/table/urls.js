function URLsTable() {
  this._table = {};
}

URLsTable.prototype.find = function(path, host) {
  if (arguments.length === 1) {
    host = path;
    path = undefined;
  }
  
  var h = this._table[host]
    , comps = path.split('/')
    , prefix, p;
  
  do {
    prefix = comps.join('/') || '/';
    p = h.paths[prefix];
  } while (!p && comps.pop())
  
  return p;
}

URLsTable.prototype.set = function(path, host, info) {
  if (typeof info == 'string') {
    info = { service: info }
  }
  
  var h = this._table[host] = (this._table[host] || {});
  h.paths = h.paths || {};
  h.paths[path] = info;
  
  console.log('URLS IS NOW');
  console.log(require('util').inspect(this._table, 2, null));
}


module.exports = URLsTable;
