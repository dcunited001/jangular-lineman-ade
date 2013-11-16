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

app.controller("AlertCtrl", function($scope) {
  //TODO: AlertCtrl template
  //TODO: alerts directive?
  //TODO: add handler for event:unauthorized (from authentication interceptor)
  $scope.alerts = [
    { type: 'error', msg: 'Oh snap! Change a few things up and try submitting again.' }, 
    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
  ];

  $scope.addAlert = function() {
    $scope.alerts.push({msg: "Another alert!"});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

});

app.controller("NavbarCtrl", function($scope, $location, $modal, AuthenticationService, SessionService, RegistrationService) {

  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };
  $scope.currentUser = SessionService.currentUser;
  $scope.loggedIn = AuthenticationService.isLoggedIn;

  //TODO: refactor to SignupBtnCtrl, but $scope.signup is not passed when i do this
  $scope.signup = { username: '', email: '', password: '', passwordConfirmation: '' };

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
                                   if (response.status === 422) {
                                     
                                   }
                                   //TODO: signup error callback: 
                                 });
    }, function (message) {
      //TODO: cancel function
    });
    
  };

});

app.controller("LoginBtnCtrl", function($scope, $modal, AuthenticationService) {
  $scope.creds  = { username: '', password: '' };

  $scope.openLoginModal = function() {

    var modalInstance = $modal.open({
      templateUrl: 'angular/modals/login-modal.html',
      controller: 'LoginModalCtrl',
      resolve: {
        creds: function() {
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
  //TODO: alerts

  $scope.ok = function() {
    //TODO: client-side validation
    $modalInstance.close($scope.signup);
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
});

app.controller("LoginModalCtrl", function($scope, $modalInstance, AuthenticationService, Users) {
  $scope.$on('event:unauthorized', function() {
    //$scope.alerts
    //$modalInstance.open
  });

  //TODO: consolidate and use same controller for modal & page?
  $scope.ok = function() {
    Users.query();
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

  var onLoginSuccess = function(res) {
    alert(res.message);
    $location.path('/home');
  };

  var onLoginFailure = function(res) {
    alert(res.message);
  };

  $scope.login = function() {
    AuthenticationService.login($scope.credentials, onLoginSuccess, onLoginFailure);
  };

});
