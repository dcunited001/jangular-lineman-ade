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

  //TODO: bind to remove function? (currentUser & loggedIn)
  if ($scope.currentUser === undefined) {
    $scope.currentUser = SessionService.currentUser;
  }
  $scope.loggedIn = AuthenticationService.isLoggedIn();

  //TODO: refactor to SignupBtnCtrl, but $scope.signup is not passed when i do this
  $scope.signup = { username: '', email: '', password: '', passwordConfirmation: '' };
  $scope.signupAlerts = [];

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
      $scope.signupAlerts = [];
      RegistrationService.signup(signup, 
                                 function(res) { 
                                   //TODO: show alert somewhere .. or another modal?
                                   alert('great success'); 
                                 },
                                 function(res) {
                                   //TODO: gotta be a better way to handle these errors
                                   $scope.signupAlerts = _.flatten(
                                     _.map(res.errors, function(v,k) { 
                                       return _.map(v, function(msg) { 
                                         return { type: "error", 
                                                  msg: k + " " + msg };
                                       });
                                     }));

                                   $scope.openSignupModal();
                                   //TODO: signup error callback: 
                                 });
    }, function (message) {
      //TODO: cancel function
    });
    
  };

  //TODO: refactor to LoginBtnCtrl, but $scope.creds is not passed when i do this
  $scope.creds  = { email: '', password: '' , remember_me: false};
  $scope.loginAlerts = [];
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
      $scope.loginAlerts = [];
      AuthenticationService.login(creds,
                                  function(res) {
                                    $scope.currentUser = SessionService.currentUser;
                                    $scope.loggedIn = AuthenticationService.isLoggedIn();
                                  },
                                  function(res) {
                                    $scope.loginAlerts.push({ type: "error", msg: res.error });
                                    $scope.openLoginModal();
                                  });

    });

  };
  
});

app.controller("SignupModalCtrl", function($scope, $modalInstance, signup, RegistrationService) {
  //TODO: fix white at bottom of modal bc of form

  $scope.ok = function() {
    //TODO: client-side validation
    $modalInstance.close(signup);
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
});

app.controller("LoginModalCtrl", function($scope, $modalInstance, creds, AuthenticationService, Users) {
  //TODO: fix white at bottom of modal bc of form

  //TODO: consolidate and use same controller for modal & page?
  $scope.ok = function() {
    //TODO: client-side validation
    $modalInstance.close(creds);
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

app.controller('UsersIndexCtrl', function($scope, Users) {
  $scope.users = Users.query();
});
