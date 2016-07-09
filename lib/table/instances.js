function InstancesTable() {
  this._table = {};
}

InstancesTable.prototype.add = function(id, info) {
  if (typeof info == 'string') {
    info = { location: info }
  } else if (typeof info == 'object' && Object.keys(info).length == 2
             && (info.host || info.hostname || info.address) && info.port) {
    // TODO: Make sure array case does not fall into here
    // TODO: Make sure array case has properly formated `location` in all elements
    info = { location: info }
  }
  
  
  console.log('ADDING INSTANCE RECORD');
  console.log(id);
  console.log(info);
  
  this._table[id] = info;
  
  console.log('INSTANCE IS NOW');
  //console.log(s);
  //console.log(s[0])
  
  console.log(require('util').inspect(this._table, 2, null));
}

InstancesTable.prototype.find = function(id) {
  var record = this._table[id];
  if (!Array.isArray(record)) {
    record = [ record ];
  }
  return record;
}


module.exports = InstancesTable;
