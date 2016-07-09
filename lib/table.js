// https://en.wikipedia.org/wiki/Routing_table
// https://en.wikipedia.org/wiki/Control_plane
function Table() {
}

Table.prototype.find = function(dest, cb) {
  console.log('TABLE FIND:');
  console.log(dest);
  
  return cb(null, dest);
}


module.exports = Table;
