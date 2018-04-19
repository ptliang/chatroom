'use strict';

/**
 * @ngdoc directive
 * @name doordashApp.directive:emoji
 * @description
 * # chatroomList component
 */
angular.module('doordashApp')
  .component('emoji', {
    template: '<div><img style="width: 20px; height: 20px;" ng-src="{{$ctrl.imageUrl}}" ng-click="$ctrl.setEmoji(\'smiley\')"/></div>',
    controller: ['$rootScope', '$scope', '$routeParams', 'chatroomService',
    function($rootScope, $scope, $routeParams, chatroomService) {
      this.currentRoom = $routeParams.id;

      this.setEmoji = function(value) {
        if (this.reaction !== null) {
          this.imageUrl = '../../images/addReaction.svg';
          this.reaction = null;
        }
        else {
          this.setEmojiUrl(value);
          this.reaction = value;
        }
        chatroomService.setEmoji(this.currentRoom, this.id, {reaction: this.reaction});
      }

      this.setEmojiUrl = function(reaction) {
        switch (reaction) {
          case 'smiley':
            this.imageUrl = '../../images/smiley.svg';
            break;
          default:
            this.imageUrl = '../../images/addReaction.svg';
        }
      }

      this.$onInit = function() {
        this.setEmojiUrl(this.reaction);
      }
    }],
    bindings: {
      reaction: "<",
      id: "<"
    }
  });
