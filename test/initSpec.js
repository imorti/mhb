var should = require('should'),
supertest = require('supertest');
var request = require('superagent');
var expect = require('chai').expect;

var baseURL = 'http://localhost:3000';

describe('mhb', function() {
	describe('test initial url', function() {
			it('should hit index page', function(done) {
				request.get(baseURL).end(function assert(err, res) {
					expect(err).to.not.be.ok;
					expect(res).to.have.property('status', 200);
					done();
				});
			});
	});
});
