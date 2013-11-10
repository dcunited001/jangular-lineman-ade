app.factory('AuthenticationService', function($http, SessionService) {
  'use strict';

  // these routes map to stubbed API endpoints in config/server.js
  return {
    login: function(credentials) {

      // this method could be used to call the API and set the user 
      //   instead of taking it in the function params
      SessionService.currentUser = credentials.username;
      return $http.post('/login', credentials);

      // TODO: fix login function (incorrect login page)
    },

    logout: function() {
      return $http.post('/logout');
    },

    isLoggedIn: function () {
      return SessionService.currentUser !== null;
    }
  };

});

app.factory('SessionService', function () {
  'use strict';

  return {
    currentUser: null
  };
});
