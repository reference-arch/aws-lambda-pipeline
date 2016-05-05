'use strict';

var sinon = require('sinon');
var should = require('should');
var underTest = require('../index.js');

require('mocha');

describe('when given a payload', function() {
  it('should pass back json to context', function(done) {

    var event = {
        'operation' : 'succeed',
        'payload' : {
            'value1' : 'some value 1',
            'value2' : 'some value 2'
        }
    };

    var context = { succeed: function () {} };
    var spy = sinon.spy(context, 'succeed');

    underTest.handler(event, context);

    should.exist(spy.withArgs(event.payload).calledOnce);

    done();
  });

  it('should record failure', function(done) {
    var event = { 'unexpected' : 'value' };

    var context = { fail: function () {} };
    var spy = sinon.spy(context, 'fail');

    underTest.handler(event, context);

    should.exist(spy.withArgs('failure occurred').calledOnce);

    done();
  });
});
