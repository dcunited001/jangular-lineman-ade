app.directive("showsMessageWhenHovered", function() {
  return function(scope, element, attributes) {
    var originalMessage = scope.message;
    element.bind("mouseenter", function() {
      scope.message = attributes.message;
      scope.$apply();
    });
    element.bind("mouseleave", function() {
      scope.message = originalMessage;
      scope.$apply();
    });
  };
});

app.directive('userProfileWidget', function() {
  return function(scope, element, attributes) {
    // TODO: userProfileWidget
  };
});
