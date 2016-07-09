exports = module.exports = function() {
  
  return function(req, res) {
    console.log('ROUTING REQUEST');
    console.log(req.url);
  }
}
