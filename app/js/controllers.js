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

app.controller("NavbarCtrl", function($scope, $location, $modal, AuthenticationService, SessionService) {
  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };
  $scope.currentUser = SessionService.currentUser;
  $scope.loggedIn = AuthenticationService.isLoggedIn();

  $scope.openSignupModal = function() {

    var modalInstance = $modal.open({
      templateUrl: 'angular/modals/signup-modal.html',
      controller: 'SignupModalCtrl'
      // resolve: {
      //   items: function () {
      //     return $scope.items;
      //   }
      // }
    });

    // modalInstance.result.then(function (selectedItem) {
    //   $scope.selected = selectedItem;
    // }, function () {
    //   $log.info('Modal dismissed at: ' + new Date());
    // });

  };

  $scope.openLoginModal = function() {

  };
});

app.controller("SignupModalCtrl", function($scope, $modalInstance) {
  $scope.ok = function() {
    $modalInstance.close('return val');
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
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
