var app = angular.module("RailsStackApp", 
                         ['ngRoute',
                          'ngCookies',
                          'ngResource',
                          'ui.bootstrap',
                          'ui.router'])

  .config(function($stateProvider, 
                   $locationProvider,
                   $urlRouterProvider) {

    'use strict';

    // states: unauthenticated
    // home - / - prompt to signup
    // features - /features - overview of product
    // explore - /explore - top patches and trending vsts
    // blog - /blog - blog posts

    // states: authenticated
    // home - / - dashboard
    // profile - /:username
    // account - /account

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/login');

    $stateProvider
      //TODO: fix login page for mobile users?
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

      .state('explore', {
        url: "/explore",
        templateUrl: "angular/explore.html",
        controller: 'HomeCtrl'
      })

      .state('features', {
        url: "/features",
        templateUrl: "angular/features.html",
        controller: 'HomeCtrl'
      })

      .state('error', {
        url: "/error",
        templateUrl: "angular/error.html",
        controller: 'HomeCtrl'
      })

    // authenticated routes

      .state('usersIndex', {
        url: "/users",
        templateUrl: "angular/users.html",
        controller: "UsersIndexCtrl"
      });

  })

  .config(function($httpProvider){

    // if (angular.element('meta[name=csrf-token]')) 
    // {
    //   $httpProvider.defaults.headers.common['X-CSRF-Token'] = angular.element('meta[name=csrf-token]').attr('content');
    // }

  //TODO: fix http interceptor, success/error functions seem to be overriding other callbacks
  //   var interceptor = function($location, $rootScope, $q) {
  //     function success(response) {
  //       return response;
  //     }

  //     function error(response) {
  //       if (response.status === 401) {
  //         $rootScope.$broadcast('event:unauthorized');
  //         $location.path('/users/login');
  //         return response;
  //       }
  //       return $q.reject(response);
  //     }

  //     return function(promise) {
  //       return promise.then(success, error);
  //     };
  //   };
  //   $httpProvider.responseInterceptors.push(interceptor);
  })

  .run(function($rootScope, $location, AuthenticationService, SessionService, $cookies) {

    //==================
    // debugging
    //==================

    $rootScope.log = function(thing) {
      console.log(thing);
    };

    $rootScope.alert = function(thing) {
      alert(thing);
    };

    //==================
    // authentication
    //==================
    var routesThatDontRequireAuth = ['/login', '/home', '/features', '/explore', '/error'];

    // check if current location matches route  
    var routeClean = function (route) {
      return _.find(routesThatDontRequireAuth,
                    function (noAuthRoute) {
                      return _.str.startsWith(route, noAuthRoute);
                    });
    };

  $rootScope.$on('$stateChangeStart', function (ev, to, toParams, from, fromParams) {
    // if route requires auth and user is not logged in
    if (!routeClean($location.url()) && !AuthenticationService.isLoggedIn()) {
      // redirect back to login
      ev.preventDefault();
      $location.path('/login');
    }

  });

  });
