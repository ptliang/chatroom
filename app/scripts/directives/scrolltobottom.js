'use strict';

/**
* @ngdoc directive
* @name doordashApp.directive:scrollToBottom
* @description
* # scrollToBottom
*/
angular.module('doordashApp')
.directive('scrollToBottom', ['$timeout', function ($timeout) {
  return {
    scope: {
      scrollToBottom: "="
    },
    restrict: 'A',
    link: function(scope, element) {
      scope.$watchCollection('scrollToBottom', function(newVal) {
        if (newVal) {
          $timeout(function() {
            element[0].scrollTop =  element[0].scrollHeight;
          }, 0);
        }

      });
    }
  };
}]);
