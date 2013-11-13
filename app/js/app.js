/*
Role Based Auth for Angular 
  http://arthur.gonigberg.com/2013/06/29/angularjs-role-based-auth/
  https://github.com/artgon/angularjs-role-based-auth

Devise Auth with Rails/Angular
  http://jes.al/2013/08/authentication-with-rails-devise-and-angularjs/
  https://github.com/jesalg/RADD
  https://github.com/colindensem/demo-rails-angularjs

Angular Auth Example
  https://github.com/fnakstad/angular-client-side-auth

AngularJS Navigation 
  https://ryankaskel.com/blog/2013/05/27/a-different-approach-to-angularjs-navigation-menus

Transclude in AngularJS 
  http://blog.omkarpatil.com/2012/11/transclude-in-angularjs.html

Angular-Strap (not part of UI project) 
  http://mgcrea.github.io/angular-strap/#/tooltip

Popular Angular Modules
  http://ngmodules.org/

File Upload for Angular JS
  http://ngmodules.org/modules/angular-file-upload

Combining Directives and Controllers
  http://icelab.com.au/articles/an-all-in-one-directive-controller-with-angularjs/
*/

var app = angular.module("RailsStackApp", 
                         ['ngRoute',
                          'ngCookies',
                          'ui.bootstrap',
                          'ui.router'])

  .config(function($stateProvider, 
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
      });

  })

  .run(function($rootScope, $location, AuthenticationService, SessionService) {

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
    var routesThatDontRequireAuth = ['/login', '/home', '/features', '/explore'];

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
