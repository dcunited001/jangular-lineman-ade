var app = angular.module("RailsStackApp", 
                         ['ngRoute',
                          'ui.bootstrap',
                          'ui.router'])

  .config(function($stateProvider, $urlRouterProvider) {

    // states: unauthenticated
    // home - / - prompt to signup
    // features - /features - overview of product
    // explore - /explore - top patches and trending vsts
    // blog - /blog - blog posts

    // states: authenticated
    // home - / - dashboard
    // profile - /:username
    // account - /account

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

