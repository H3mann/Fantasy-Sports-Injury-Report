angular.module('fantasy.table', [])

.controller('fantasyCtrl', function ($scope, fantasy) {
  // Your code here
console.log('test')

   $scope.data = {};
   
   console.log('****',$scope.data);

   var initializePlayers = function () {
    fantasy.getAll()
      .then(function (players) {
        console.log('xxxx', $scope.data.players = initializePlayers)
        $scope.data.players = players;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  initializePlayers();

    // $scope.submit = function () {
    //   var isFound = false;
    //   $scope.data.players.forEach(function(player){
    //     if(player.name === $scope.text){
    //       isFound = true;
    //       break;
    //     }
    //   });
    //   if(isFound){
        
    //   }
      

    // }
      // $scope.text = '';
      // $scope.submit = function() {
      //   if ($scope.text) {
      //     $scope.list.push(this.text);
      //     $scope.text = '';
      //   }
      // };



  });

    



    //console.log(fantasy.getAll());

    

     


 

     
