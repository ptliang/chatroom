'use strict';

/**
 * @ngdoc function
 * @name doordashApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the doordashApp. Supports the log out function which isn't made
 * available per UX
 */
angular.module('doordashApp')
  .controller('MainCtrl', ['chatroomService', function (chatroomService) {

    this.logout = function() {
      chatroomService.logoutUser();
    }
  }]);
