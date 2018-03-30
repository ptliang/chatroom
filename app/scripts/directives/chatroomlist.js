'use strict';

/**
 * @ngdoc directive
 * @name doordashApp.directive:chatroomList
 * @description
 * # chatroomList component
 */
angular.module('doordashApp')
  .component('chatroomList', {
    templateUrl: 'views/chatroomlist.html',
    controller: ['$rootScope', '$scope', '$routeParams', 'chatroomService',
    function($rootScope, $scope, $routeParams, chatroomService) {
      chatroomService.getRoomsList()
        .then(function(res) {
          this.roomList = res.data;
        }.bind(this), function (err) {
          console.log(err);
        });

      this.currentRoom = $routeParams.id;
    }]
  });
