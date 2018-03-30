'use strict';

/**
 * @ngdoc function
 * @name doordashApp.controller:ChatroomCtrl
 * @description
 * # ChatroomCtrl
 * Controller of the doordashApp
 *
 */
angular.module('doordashApp')
  .controller('ChatroomCtrl', ['$routeParams', '$location', '$filter', 'chatroomService', function ($routeParams, $location, $filter, chatroomService) {
    // if user tries to access the chat screen without logging in,
    // redirect them to the login screen
    if (!sessionStorage.getItem('username')) {
      $location.path('/')
    }

    // init process
    this.roomId = $routeParams.id;
    this.user = {
      username: sessionStorage.getItem('username'),
      createdTS: sessionStorage.getItem('createdTS'),
    };

    if (this.roomId) {
      chatroomService.getRoomDetail(this.roomId)
        .then(function(res) {
          this.roomDetail = res.data;
        }.bind(this));

      chatroomService.getMessages(this.roomId)
        .then(function(res) {
          this.messages = res.data;
        }.bind(this));
    }

    // convert time stamp to human readable format
    this.timestampToString = function(timestamp) {
      let str = '';

      if (timestamp >= 3600000) {
        let hours = Math.trunc(timestamp / 3600000 );
        str += hours + (hours == 1 ? ' hour' : ' hours');
      }

      timestamp %= 3600000;
      let minutes = Math.trunc(timestamp / 60000);
      str += minutes + (minutes == 1 ? ' minute' : ' minutes');

      return str;
    }

    this.user.elapsedTime = this.timestampToString(Date.now() - this.user.createdTS);

    // send user message
    this.sendMessage = function(event) {
      let newMsg = this.newMessage;
      chatroomService.sendMessage(this.roomId, this.user.username, this.newMessage)
        .then(function(res) {
          // update local messages store without re-fetching data
          // might not be the best approach
          this.messages.push({
            id: Date.now(),
            message: newMsg,
            name: this.user.username,
            reaction: null
          });
        }.bind(this), function(err) {
          console.log(err)
        })
      // this.messages.push({
      //   id: Date.now(),
      //   message: this.newMessage,
      //   name: this.user.username,
      //   reaction: null
      // });

      this.newMessage = '';
    }

  }]);
