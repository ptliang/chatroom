'use strict';

/**
 * @ngdoc function
 * @name doordashApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the doordashApp
 * Login form controller, redirects to chatroom screen upon log in
 */
 angular.module('doordashApp')
   .controller('LoginCtrl', ['$location', 'chatroomService', function ($location, chatroomService) {
     if (sessionStorage.getItem('username')) {
       $location.path('/chatroom');
     }
   }]);
