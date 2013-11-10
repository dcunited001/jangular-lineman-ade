app.directive("showsMessageWhenHovered", function() {
  return {
    link: function(scope, element, attributes) {
      var originalMessage = scope.message;
      element.bind("mouseenter", function() {
        scope.message = attributes.message;
        scope.$apply();
      });
      element.bind("mouseleave", function() {
        scope.message = originalMessage;
        scope.$apply();
      });
    }
  };
}); 

app.directive('signupLoginWidget', function() {
  return {
    templateUrl: 'angular/directives/signup-login-widget.html'
  }
});

app.directive('userProfileWidget', function() {
  return {
    templateUrl: 'angular/directives/user-profile-widget.html'
  };
});

app.directive('navbarWidget', function() {
  return {
    controller: 'NavbarCtrl',
    templateUrl: 'angular/directives/navbar-widget.html' 
  };
});

app.directive('sidebarWidget', function() {
  return {
    controller: "SidebarCtrl",
    templateUrl: 'angular/directives/sidebar-widget.html'
  };
});
