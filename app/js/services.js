app.factory('RegistrationService', function($http) {
  'use strict';
  
  return {
    signup: function(params, success, error) {
      return $http.post('/api/users.json', { user: params })
        .success(success)
        .error(error);
    }
  };
});

app.factory('AuthenticationService', function($http, SessionService) {
  'use strict';

  // these routes map to stubbed API endpoints in config/server.js
  return {
    login: function(creds, success, error) {
      return $http.post('/api/login.json', { 
        user: creds
      }).success(function(res) {
        SessionService.currentUser = creds.email;
        success(res);
      }).error(function(res) {
        SessionService.currentUser = null;
        error(res);
      });
    },

    logout: function(success, error) {
      return $http.post('/api/logout.json', { 
        format: 'json'
      }).then(function(res) {
        SessionService.currentUser = null;
        success(res);
      }, error);
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

app.factory('Users', function($resource) {
  return $resource('/api/users', { format: 'json' });
});

 // .factory('Devices', ['$resource', function($resource){
 //    return $resource('http://localhost\\:3000/devices/:deviceId',
 //        {},
 //        {update: {method:'PUT'}, isArray:false}
 //        );
 //  }]);
