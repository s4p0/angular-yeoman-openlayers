'use strict';

angular.module('aw4App')
  .controller('NavbarRouteCtrl', function ($scope,$location) {
    
    $scope.menu = [{
    	'title': 'Home',
    	'link': '/',
    	'glyph':  'glyphicon glyphicon-home'
    },{
    	'title': 'Tutorial',
    	'link': '/tutorial',
    	'glyph':  'glyphicon glyphicon-book'
    }];

    $scope.dropdownMenu = [{
    	'title' : 'Contribute 01',
    	'glyph':  'glyphicon glyphicon-globe',
    	'links' : [{
    		'title': 'Picture',
    		'link': '/contribute/picture'
    	},{
    		'title': 'Video',
    		'link': '/contribute/video'
    	},{
    		'title': 'Audio',
    		'link': '/contribute/audio'
    	},{
    		'title': 'Data',
    		'link': '/contribute/data'
    	}],
    }];

    $scope.baseLayers = [{
    	'title': 'Modis Sat Image',
    },{
    	'title' : 'SPOT Sat Image'
    }];

    $scope.projects = [{
    	'title': 'Roraima',
    	'baseLayer': 'Base',
    	'overLayer': 'ANN'
    },{
    	'title': 'Pará',
    	'baseLayer': 'Base',
    	'overLayer': 'ANN'
    }];

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
