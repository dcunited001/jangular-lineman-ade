angular.module("app").controller('HomeCtrl', function($scope, $state, AuthenticationService) {
  $scope.title = "Home";
  $scope.message = "Mouse Over these images to see a directive at work";

  var onLogoutSuccess = function(response) {
    alert(response.message);
    $state.transitionTo('login');
  };

  $scope.logout = function() {
    AuthenticationService.logout().success(onLogoutSuccess);
  };
});
