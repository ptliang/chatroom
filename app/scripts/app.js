'use strict';

/**
 * @ngdoc overview
 * @name doordashApp
 * @description
 * # doordashApp
 *
 * Main module of the application.
 */
 angular
   .module('doordashApp', [
     'ngAnimate',
     'ngCookies',
     'ngResource',
     'ngRoute',
     'ngSanitize'
   ])
   .config(function ($routeProvider, $locationProvider) {
     $locationProvider.hashPrefix('');

     $routeProvider
       .when('/', {
         templateUrl: 'views/login.html',
         controller: 'LoginCtrl',
         controllerAs: 'login'
       })
       .when('/chatroom', {
         templateUrl: 'views/chatroom.html',
         controller: 'ChatroomCtrl',
         controllerAs: 'chatroom'
       })
       .when('/chatroom/:id', {
         templateUrl: 'views/chatroom.html',
         controller: 'ChatroomCtrl',
         controllerAs: 'chatroom'
       })
       .otherwise({
         redirectTo: '/'
       });
   });
