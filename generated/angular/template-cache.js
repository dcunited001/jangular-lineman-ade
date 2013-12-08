angular.module("RailsStackApp").run(["$templateCache", function($templateCache) {

  $templateCache.put("angular/directives/nav-bar-widget.html",
    "\n" +
    "<div class=\"navbar-inner\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <button type=\"button\" data-toggle=\"collapse\" data-target=\".nav-collapse\" class=\"btn btn-navbar\"><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a href=\"#\" class=\"brand\">Angular Rails</a>\n" +
    "    <div class=\"nav-collapse collapse\">\n" +
    "      <ul class=\"nav\">\n" +
    "        <li ng-class=\"{ active: isActive('/home') }\"><a href=\"#/home\">Home</a></li>\n" +
    "        <li ng-class=\"{ active: isActive('/features') }\"><a href=\"#/features\">Features</a></li>\n" +
    "        <li ng-class=\"{ active: isActive('/explore') }\"><a href=\"#/explore\">Explore</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );

  $templateCache.put("angular/directives/navbar-widget.html",
    "\n" +
    "<div class=\"navbar-inner\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <button type=\"button\" data-toggle=\"collapse\" data-target=\".nav-collapse\" class=\"btn btn-navbar\"><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a href=\"/home\" class=\"brand\">Angular Rails</a>\n" +
    "    <div ng-switch=\"loggedIn\" class=\"nav-collapse collapse\">\n" +
    "      <ul ng-switch-when=\"true\" class=\"nav\">\n" +
    "        <li ng-class=\"{ active: isActive('/home') }\"><a href=\"/home\">Home</a></li>\n" +
    "        <li ng-class=\"{ active: isActive('/users') }\"><a href=\"/users\">Users</a></li>\n" +
    "        <li ng-class=\"{ active: isActive('/foo') }\"><a href=\"/foo\">Foo</a></li>\n" +
    "        <li ng-class=\"{ active: isActive('/bar') }\"><a href=\"/bar\">Bar</a></li>\n" +
    "        <li ng-class=\"{ active: isActive('/baz') }\"><a href=\"/baz\">Baz</a></li>\n" +
    "      </ul>\n" +
    "      <ul ng-switch-default=\"ng-switch-default\" class=\"nav\">\n" +
    "        <li ng-class=\"{ active: isActive('/home') }\"><a href=\"/home\">Home</a></li>\n" +
    "        <li ng-class=\"{ active: isActive('/features') }\"><a href=\"/features\">Features</a></li>\n" +
    "        <li ng-class=\"{ active: isActive('/explore') }\"><a href=\"/explore\">Explore</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "    <div ng-if=\"loggedIn\" class=\"pull-right\">\n" +
    "      <div user-profile-widget=\"user-profile-widget\" class=\"btn-group\"></div>\n" +
    "    </div>\n" +
    "    <div ng-if=\"!(loggedIn)\" class=\"pull-right\">\n" +
    "      <div signup-login-widget=\"signup-login-widget\" class=\"btn-group\"></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );

  $templateCache.put("angular/directives/sidebar-widget.html",
    "\n" +
    "<div class=\"well sidebar-nav\">\n" +
    "  <ul class=\"nav nav-list\">\n" +
    "    <li class=\"nav-header\">Sidebar</li>\n" +
    "    <li class=\"active\"><a href=\"#\">Link</a></li>\n" +
    "    <li><a href=\"#\">Link</a></li>\n" +
    "    <li><a href=\"#\">Link</a></li>\n" +
    "    <li class=\"nav-header\">Sidebar</li>\n" +
    "    <li><a href=\"#\">Link</a></li>\n" +
    "    <li><a href=\"#\">Link</a></li>\n" +
    "    <li><a href=\"#\">Link</a></li>\n" +
    "    <li class=\"nav-header\">Sidebar</li>\n" +
    "    <li><a href=\"#\">Link</a></li>\n" +
    "    <li><a href=\"#\">Link</a></li>\n" +
    "    <li><a href=\"#\">Link</a></li>\n" +
    "  </ul>\n" +
    "</div>"
  );

  $templateCache.put("angular/directives/signup-login-widget.html",
    "\n" +
    "<button ng-click=\"openSignupModal()\" class=\"btn btn-primary\">Sign Up</button>\n" +
    "<button ng-click=\"openLoginModal()\" class=\"btn\">Log In</button>"
  );

  $templateCache.put("angular/directives/user-profile-popover.html",
    "\n" +
    "<div ng-class=\"{ in: isOpen(), fade: animation() }\" class=\"popover {{placement}}\">\n" +
    "  <div class=\"arrow\">\n" +
    "    <div class=\"popover-inner\">\n" +
    "      <h3 ng-bind=\"title\" ng-show=\"title\" class=\"popover-title\"></h3>\n" +
    "      <div ng-bind=\"content\" class=\"popover-content\"></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>"
  );

  $templateCache.put("angular/directives/user-profile-widget.html",
    "\n" +
    "<button class=\"btn btn-primary\">{{ currentUser }}</button>"
  );

  $templateCache.put("angular/explore.html",
    "\n" +
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"span4\">\n" +
    "    <h1>Explore</h1>\n" +
    "  </div>\n" +
    "  <div class=\"span8\"></div>\n" +
    "</div>\n" +
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"span4\">\n" +
    "    <p>Top Instruments</p>\n" +
    "  </div>\n" +
    "  <div class=\"span4\">\n" +
    "    <p>Top Patches</p>\n" +
    "  </div>\n" +
    "  <div class=\"span4\">\n" +
    "    <p>Real App Content</p>\n" +
    "  </div>\n" +
    "</div>"
  );

  $templateCache.put("angular/features.html",
    "\n" +
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"span4\">\n" +
    "    <h1>Features</h1>\n" +
    "  </div>\n" +
    "  <div class=\"span8\"></div>\n" +
    "</div>\n" +
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"span4\">\n" +
    "    <p>Sales Pitch And Product Overview</p>\n" +
    "  </div>\n" +
    "  <div class=\"span8\"></div>\n" +
    "</div>"
  );

  $templateCache.put("angular/home.html",
    "\n" +
    "<div class=\"hero-unit\">\n" +
    "  <h1>Welcome to the {{title}} page!</h1>\n" +
    "</div>\n" +
    "<div class=\"row-fluid\">\n" +
    "  <div class=\"span4\"><img src=\"img/demo1.jpg\" shows-message-when-hovered=\"shows-message-when-hovered\" message=\"Im the first house.\" class=\"th\"/></div>\n" +
    "  <div class=\"span4\">\n" +
    "    <p>{{message}}</p>\n" +
    "  </div>\n" +
    "  <div class=\"span4\"><img src=\"img/demo2.jpg\" shows-message-when-hovered=\"shows-message-when-hovered\" message=\"Im the second house.\" class=\"th\"/></div>\n" +
    "</div>\n" +
    "<!--button.button.large.expand.radius(ng-click=\"logout()\") Log Out-->"
  );

  $templateCache.put("angular/login.html",
    "\n" +
    "<div class=\"row-fluid\">\n" +
    "  <h1>Login</h1>\n" +
    "</div>\n" +
    "<div id=\"login\" class=\"row-fluid\">\n" +
    "  <form ng-submit=\"login()\">\n" +
    "    <fieldset class=\"radius\">\n" +
    "      <div class=\"row-fluid\">\n" +
    "        <div class=\"span3\"></div>\n" +
    "        <div class=\"span3\">\n" +
    "          <input type=\"text\" name=\"username\" placeholder=\"username\" ng-model=\"credentials.username\" required=\"required\"/>\n" +
    "        </div>\n" +
    "        <div class=\"span3\">\n" +
    "          <input type=\"password\" name=\"password\" placeholder=\"password\" ng-model=\"credentials.password\" required=\"required\"/>\n" +
    "        </div>\n" +
    "        <div class=\"span3\"></div>\n" +
    "      </div>\n" +
    "      <div class=\"row-fluid\">\n" +
    "        <div class=\"span3\"></div>\n" +
    "        <div class=\"span6\">\n" +
    "          <button type=\"submit\" class=\"button large expand radius\">Login</button>\n" +
    "        </div>\n" +
    "        <div class=\"span3\"></div>\n" +
    "      </div>\n" +
    "    </fieldset>\n" +
    "  </form>\n" +
    "</div>"
  );

  $templateCache.put("angular/modals/login-modal.html",
    "\n" +
    "<form id=\"login-modal\" ng-submit=\"ok()\">\n" +
    "  <div class=\"modal-header\">\n" +
    "    <h3>Log In</h3>\n" +
    "  </div>\n" +
    "  <div class=\"modal-body\">\n" +
    "    <div class=\"row-fluid\">\n" +
    "      <alert ng-repeat=\"alert in loginAlerts\" type=\"alert.type\" close=\"closeAlert($index)\">{{alert.msg}}</alert>\n" +
    "    </div>\n" +
    "    <div class=\"row-fluid\">\n" +
    "      <div class=\"span5\">\n" +
    "        <input type=\"text\" name=\"username\" placeholder=\"Email\" ng-model=\"creds.email\" required=\"required\"/>\n" +
    "      </div>\n" +
    "      <div class=\"span5\">\n" +
    "        <input type=\"password\" name=\"password\" placeholder=\"Password\" ng-model=\"creds.password\" required=\"required\"/>\n" +
    "      </div>\n" +
    "      <div class=\"span2\">\n" +
    "        <input type=\"checkbox\" name=\"remember_me\" ng-model=\"creds.remember_me\"/>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <div class=\"pull-right\">\n" +
    "      <button type=\"submit\" class=\"btn btn-primary\">Log In</button>\n" +
    "    </div>\n" +
    "    <div class=\"pull-left\">\n" +
    "      <button ng-click=\"cancel()\" class=\"btn\">Cancel</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</form>"
  );

  $templateCache.put("angular/modals/signup-modal.html",
    "\n" +
    "<form id=\"signup-modal\" ng-submit=\"ok()\">\n" +
    "  <div class=\"modal-header\">\n" +
    "    <h3>Sign Up</h3>\n" +
    "  </div>\n" +
    "  <div class=\"modal-body\">\n" +
    "    <input type=\"text\" name=\"email\" placeholder=\"Email\" ng-model=\"signup.email\" required=\"required\"/>\n" +
    "    <input type=\"text\" name=\"username\" placeholder=\"Username\" ng-model=\"signup.username\" required=\"required\"/>\n" +
    "    <input type=\"password\" name=\"password\" placeholder=\"Password\" ng-model=\"signup.password\" required=\"required\"/>\n" +
    "    <input type=\"password\" name=\"passwordConfirmation\" placeholder=\"Confirm\" ng-model=\"signup.passwordConfirmation\" required=\"required\"/>\n" +
    "    <div class=\"row-fluid\">\n" +
    "      <alert ng-repeat=\"alert in signupAlerts\" type=\"alert.type\" close=\"closeAlert($index)\">{{alert.msg}}</alert>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <div class=\"pull-right\">\n" +
    "      <button type=\"submit\" class=\"btn btn-primary\">Sign Up</button>\n" +
    "    </div>\n" +
    "    <div class=\"pull-left\">\n" +
    "      <button ng-click=\"cancel()\" class=\"btn\">Cancel</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</form>"
  );

  $templateCache.put("angular/users.html",
    "\n" +
    "<div class=\"hero-unit\">\n" +
    "  <h1>Users</h1>\n" +
    "</div>\n" +
    "<div ng-repeat=\"user in users\" class=\"row-fluid\"><em>{{ user.username }}</em>\n" +
    "  <p>{{ user.email }}</p>\n" +
    "</div>"
  );

}]);
