'use strict';

/**
 * @ngdoc directive
 * @name doordashApp.directive:loginForm
 * @description
 * # loginForm component
 */
angular.module('doordashApp')
  .component('loginForm', {
    templateUrl: 'views/loginForm.html',
    controller: ['$rootScope', 'chatroomService',
    function($rootScope, chatroomService) {
      this.userName = '';
      this.loginAction = function() {
        chatroomService.loginUser(this.userName);
      };
    }]
  });
