angular.module("app", ['ui.compat']).config(  
  ['$stateProvider', '$routeProvider', '$urlRouterProvider',
   function ($stateProvider,   $routeProvider,   $urlRouterProvider) {

     $stateProvider
       .state('login', {
         url: '/login',
         templateUrl: 'angular/login.html',
         controller: 'LoginCtrl' })

       .state('home', {
         url: '/home',
         templateUrl: 'angular/home.html',
         controller: 'HomeCtrl' });

     $urlRouterProvider.otherwise('/login');     

   }]).run(    
     ['$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        // adds some basic utilities to the $rootScope for debugging purposes
        $rootScope.log = function(thing) {
          console.log(thing);
        };

        $rootScope.alert = function(thing) {
          alert(thing);
        };

      }]);

