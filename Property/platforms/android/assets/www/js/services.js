angular.module('starter.services', [])

.factory('EmailComposer', ['$q', function ($q) {
//alert("dud");
    return {
      isAvailable: function () { console.log("in available func");
        var q = $q.defer();

        cordova.plugins.email.isAvailable(function (isAvailable) {
          if (isAvailable) {
            q.resolve();
          } else {
            q.reject();
          }
        });

        return q.promise;
      },

      open: function (properties) { console.log("in open funciton");
        var q = $q.defer();

        cordova.plugins.email.open(properties, function () {
          q.reject(); // user closed email composer
        });

        return q.promise;
      },

      addAlias: function (app, schema) { console.log("ion aliancs.");
        cordova.plugins.email.addAlias(app, schema);
      }
    };
  }]);
