angular.module('fantasy.factory', [])

.factory('fantasy', function ($http) {
  // Your code here

  var getAll = function () {
    return $http({
      method: 'GET',
      url: 'https://www.stattleship.com/baseball/mlb/injuries',
      headers: {
       'Authorization': 'Token token=4b97390f240ed9078c63cacd2c6409b2',
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.stattleship.com; version=1'
      }
    })
    .then(function (resp) {
      var players = resp.data.players;

      return players;
      
    });
  };

  return {
    getAll: getAll
  };

  })