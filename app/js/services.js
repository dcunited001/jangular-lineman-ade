app.factory('RegistrationService', function($http) {
  'use strict';
  
  return {
    signup: function(params, success, error) {
      return $http.post('/api/users.json', { user: params })
        .then(success, error);
    }
  };
});

app.factory('AuthenticationService', function($http, SessionService) {
  'use strict';

  // these routes map to stubbed API endpoints in config/server.js
  return {
    login: function(credentials, success, error) {

      // this method could be used to call the API and set the user 
      //   instead of taking it in the function params
      //SessionService.currentUser = credentials.username;
      
      return $http.post('/api/login.json', { 
        user: credentials
      }).then(success, error);
    },

    logout: function(success, error) {
      return $http.post('/api/logout.json', { 
        format: 'json'
      }).then(success, error);
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
