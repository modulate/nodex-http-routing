/* global describe, it, expect */

var expect = require('chai').expect;
var source = require('..');


describe('nodex-http-routing', function() {
  
  it('should export manifest', function() {
    expect(source).to.be.an('object');
    expect(source['router']).to.be.a('function');
  });
  
  describe('http/routing/router', function() {
    var response = source['router'];
    
    it('should be annotated', function() {
      expect(response['@implements']).to.equal('http://schema.modulate.io/js/http/Router');
      expect(response['@singleton']).to.equal(true);
    });
  });
  
});
