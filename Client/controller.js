angular.module('fantasy.table', [])

.controller('fantasyCtrl', function ($scope, fantasy) {
  // Your code here
console.log('test')

   $scope.data = {};
   console.log($scope.data);

   var initializePlayers = function () {
    fantasy.getAll()
      .then(function (players) {
        $scope.data.players = players;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  initializePlayers();
  });

    



    //console.log(fantasy.getAll());

    

     


 

     
