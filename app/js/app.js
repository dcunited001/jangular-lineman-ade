var app = angular.module("RailsStackApp", 
                         ['ngRoute',
                          'ui.bootstrap',
                          'ui.router'])

  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('login', {
        url: "/login",
        templateUrl: "angular/login.html",
        controller: 'LoginCtrl'
      })

      .state('home', {
        url: "/home",
        templateUrl: "angular/home.html",
        controller: 'HomeCtrl'
      })

      .state('error', {
        url: "/error",
        templateUrl: "angular/error.html",
        controller: 'HomeCtrl'
      });

  })

  .run(function($rootScope, $location, AuthenticationService, SessionService) {
    // adds some basic utilities to the $rootScope for debugging purposes
    $rootScope.log = function(thing) {
      console.log(thing);
    };

    $rootScope.alert = function(thing) {
      alert(thing);
    };
  });

