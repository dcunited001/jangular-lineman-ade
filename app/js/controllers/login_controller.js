angular.module("app").controller('LoginCtrl', function($scope, $state, AuthenticationService) {
  $scope.credentials = { username: "", password: "" };

  var onLoginSuccess = function(response) {
    alert(response.message);
    $state.transitionTo('home');
  };

  $scope.login = function() {
    AuthenticationService.login($scope.credentials).success(onLoginSuccess);
  };
});
