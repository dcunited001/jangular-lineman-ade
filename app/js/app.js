var app = angular.module("RailsStackApp", 
                         ['ngRoute',
                          'ui.bootstrap',
                          'ui.router'])

  .config(function($routeProvider) {

    $routeProvider.when('/login', {
      templateUrl: 'angular/login.html',
      controller: 'LoginController'
    });

    $routeProvider.when('/home', {
      templateUrl: 'angular/home.html',
      controller: 'HomeController'
    });

    $routeProvider.otherwise({ redirectTo: '/login' });

  })

  .run(function($rootScope) {
    // adds some basic utilities to the $rootScope for debugging purposes
    $rootScope.log = function(thing) {
      console.log(thing);
    };

    $rootScope.alert = function(thing) {
      alert(thing);
    };
  });

