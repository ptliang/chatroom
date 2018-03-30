'use strict';

describe('Directive: chatroomList', function () {

  // load the directive's module
  beforeEach(module('doordashApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<chatroom-list></chatroom-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the chatroomList directive');
  }));
});
