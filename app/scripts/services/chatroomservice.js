'use strict';

/**
 * @ngdoc service
 * @name doordashApp.chatroomService
 * @description
 * # chatroomService
 * Factory in the doordashApp for handling Rest API calls and provide helper functions.
 */
angular.module('doordashApp')
  .factory('chatroomService', ['$location', '$http', function ($location, $http) {
    let user = {};

    // Public API here
    return {
      logoutUser: function () {
        sessionStorage.clear();
        $location.path('/');
      },

      loginUser: function(name) {
        user.username = name;
        sessionStorage.setItem('username', name);
        sessionStorage.setItem('createdTS', Date.now());
        $location.path('/chatroom');
      },

      getMessages: function(roomId) {
        return $http.get('http://localhost:8080/api/rooms/' + roomId + '/messages');
      },

      getRoomsList: function() {
        return $http.get('http://localhost:8080/api/rooms');

      },

      getRoomDetail: function(roomId) {
        return $http.get('http://localhost:8080/api/rooms/' + roomId);
      },

      sendMessage: function(roomId, name, message) {
        let data = {
          name,
          message
        };

        return $http.post('http://localhost:8080/api/rooms/' + roomId + '/messages', data)
      }
    };
  }]);
