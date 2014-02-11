'use strict';

angular.module('aw4App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.modal = {
      'title': 'Some Title',
      'content': 'hello modal content'
    };
    $scope.popover = {
      "title": "Title",
      "content": "Hello Popover<br />This is a multiline message!"
    };
  });
