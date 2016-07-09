function HostsTable() {
  this._hosts = {};
}

HostsTable.prototype.add = function(path, host, sid) {
  if (arguments.length === 2) {
    sid = host;
    host = path;
    path = undefined;
  }
  
  var h = this._hosts[host] = (this._hosts[host] || {});
  if (!path) {
    h.sid = sid;
  } else {
    h.paths = h.paths || {};
    h.paths[path] = sid;
  }
}


module.exports = HostsTable;