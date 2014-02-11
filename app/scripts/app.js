'use strict';

angular.module('aw4App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'mgcrea.ngStrap'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/navbar-route', {
        templateUrl: 'views/navbar-route.html',
        controller: 'NavbarRouteCtrl'
      })
      // .otherwise({
      //   redirectTo: '/'
      // });
    $locationProvider.html5Mode(true);
  });
