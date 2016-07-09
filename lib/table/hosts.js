function HostsTable() {
  this._table = {};
}

HostsTable.prototype.find = function(path, host) {
  if (arguments.length === 1) {
    host = path;
    path = undefined;
  }
  
  var h = this._table[host];
  
  if (!path) {
    return h.host;
  } else {
    console.log('TODO: Path');
  }
}

HostsTable.prototype.add = function(path, host, info) {
  if (arguments.length === 2) {
    info = host;
    host = path;
    path = undefined;
  }
  if (typeof info == 'string') {
    info = { service: info }
  }
  
  var h = this._table[host] = (this._table[host] || {});
  if (!path) {
    h.host = info;
  } else {
    h.paths = h.paths || {};
    h.paths[path] = info;
  }
  
  console.log('HOSTS IS NOW');
  console.log(require('util').inspect(this._table, 2, null));
}


module.exports = HostsTable;