function ServicesTable() {
  this._table = {};
}

ServicesTable.prototype.add = function(name, info) {
  if (typeof info == 'string') {
    info = { instance: info }
  }
  
  var s = this._table[name] = (this._table[name] || []).concat(info);
  
  console.log('SERVICE IS NOW');
  //console.log(s);
  //console.log(s[0])
  
  console.log(require('util').inspect(this._table, 2, null));
}

ServicesTable.prototype.find = function(sid) {
  return this._table[sid];
}


module.exports = ServicesTable;
