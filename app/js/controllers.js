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

app.controller("NavbarCtrl", function($scope, $location, $modal, AuthenticationService, SessionService, RegistrationService) {
  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };
  $scope.currentUser = SessionService.currentUser;
  $scope.loggedIn = AuthenticationService.isLoggedIn();

  // model defaults
  $scope.signup = { username: '', email: '', password: '', passwordConfirmation: '' };
  $scope.creds  = { username: '', password: '' }

  $scope.openSignupModal = function() {

    var modalInstance = $modal.open({
      templateUrl: 'angular/modals/signup-modal.html',
      controller: 'SignupModalCtrl',
      resolve: {
        signup: function () {
          return $scope.signup;
        }
      }
    });

    modalInstance.result.then(function (signup) {
      RegistrationService.signup(signup, 
                                 function(response) { 
                                   //TODO: signup success callback: alert(response); 
                                 },
                                 function(response) {
                                   //TODO: signup error callback: 
                                 });
    }, function (message) {
      //TODO: cancel function
    });
 
  };

  $scope.openLoginModal = function() {

    var modalInstance = $modal.open({
      templateUrl: 'angular/modals/login-modal.html',
      controller: 'LoginModalCtrl',
      resolve: {
        login: function() {
          return $scope.creds;
        }
      }
    });

    modalInstance.result.then(function (creds) {
      AuthenticationService.login(creds,
                                  function(response) {
                                  
                                  },
                                  function(response) {

                                  });

    });

  };

});

app.controller("SignupModalCtrl", function($scope, $modalInstance, signup, RegistrationService) {
  $scope.ok = function() {
    //TODO: client-side validation
    
    $modalInstance.close($scope.signup);
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
});

app.controller("LoginModalCtrl", function($scope, $modalInstance, AuthenticationService) {
  //TODO: consolidate and use same controller for modal & page?
  $scope.ok = function() {
    $modalInstance.close($scope.login);
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
