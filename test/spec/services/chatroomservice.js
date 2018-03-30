'use strict';

describe('Service: chatroomService', function () {

  // load the service's module
  beforeEach(module('doordashApp'));

  // instantiate service
  var chatroomService;
  beforeEach(inject(function (_chatroomService_) {
    chatroomService = _chatroomService_;
  }));

  it('should do something', function () {
    expect(!!chatroomService).toBe(true);
  });

});
