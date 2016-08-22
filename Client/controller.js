angular.module('fantasy.table', [])

.controller('fantasyCtrl', function ($scope, fantasy) {
  // Your code here


   $scope.players = ['player1','player2','player3'];
   Links.getAll()
      .then(function (links) {
        $scope.data.links = links;
      })
      .catch(function (error) {
        console.error(error);
      });

   $scope.players = players;


    



    //console.log(fantasy.getAll());

    

     


  });

     
