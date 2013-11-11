app.controller('HomeCtrl', function($scope, $location, AuthenticationService) {
  $scope.title = "Home";
  $scope.message = "Mouse Over these images to see a directive at work";

  var onLogoutSuccess = function(response) {
    alert(response.message);
    $location.path('/login');
  };

  $scope.logout = function() {
    AuthenticationService.logout().success(onLogoutSuccess);
  };
});

app.controller("NavbarCtrl", function($scope, $location, AuthenticationService, SessionService) {
  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };
  $scope.currentUser = SessionService.currentUser;
  $scope.loggedIn = AuthenticationService.isLoggedIn();
});

app.controller("SidebarCtrl", function($scope, $location) {
  // $scope.isActive = function(viewLocation) {
  //   return viewLocation === $location.path();
  // };
});

app.controller('LoginCtrl', function($scope, $location, AuthenticationService) {
  $scope.credentials = { username: "", password: "" };

  var onLoginSuccess = function(response) {
    alert(response.message);
    $location.path('/home');
  };

  $scope.login = function() {
    AuthenticationService.login($scope.credentials).success(onLoginSuccess);
  };

});
