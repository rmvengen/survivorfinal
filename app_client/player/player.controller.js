/*(function() {

  angular
    .module('survivorApp')
    .controller('playerCtrl', playerCtrl);

  playerCtrl.$inject = ['$scope', 'PlayerData', 'SurvivorData', 'SelectedData'];

  function playerCtrl($scope, PlayerData, SurvivorData, SelectedData) {
    // Nasty IE9 redirect hack (not recommended)
    /*
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }*/
    
   /*
    console.log(window.location);    
    
    var vm = this;
    
    vm.content = "Player Data";
    vm.selectedContestantName = "";
    vm.selectedSeasonName = "";
    vm.selectedAge = "";
    
    //check selected Departure
    if(SelectedData.selectedContestantName !== null){
      vm.selectedContestantName = SelectedData.selectedContestantName;
    }
    /*
    //check selected Arrival
    if(SelectedData.selectedSeasonName !== null){
      vm.selectedSeasonName = SelectedData.selectedSeasonName;
    }
    
    //check selected weight
    if(SelectedData.selectedAge !== null){
      vm.selectedAge = SelectedData.selectedAge;
    }    
    */
/*
    //refactored for Angular 1.6 - removed success/error, used Promises...
    vm.getPlayerData = function() {
      PlayerData.getPlayers()
        .then(function(response) {
          vm.players = response.data;
          console.log(response);
        })
        .catch(function(e) {
          console.log(e);
        });
    }

    //refactored for Angular 1.6 - removed success/error, used Promises...
    vm.getContestantsData = function() {
      PlayerData.getContestantsData()
        .then(function(response) {
          vm.contestantsData = response.data;
          console.log(vm.contestantsData);
        })
        .catch(function(e) {
          console.log(e);
        });
    }

    vm.toggleMenu = function() {
      if (vm.class === "toggled") {
        vm.class = "";
      }
      else {
        vm.class = "toggled";
      }
      console.log(vm.class + " is good");
    };
    
    vm.clearSelectedData = function(){
      
      vm.selectedContestantName = null;
      //vm.selectedSeasonName = null;
     // vm.selectedAge = null;
    }
    
    //saved departure
    $scope.$watch(
      function(){
        return vm.selectedContestantName;    
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.name !== oldValue.name){
          SelectedData.selectedContestantName = newValue;
        } 
      }, 
      true
    );
    /*
    //saved arrival
    $scope.$watch(
      function(){
        return vm.selectedSeasonName;
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.icao !== oldValue.icao){
          SelectedData.selectedSeasonName = newValue;
        } 
      }, 
      true
    );
    
    //saved weight
    $scope.$watch(
      function(){
        return vm.selectedAge;
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.weight !== oldValue.weight){
          SelectedData.selectedAge = newValue;
        } 
      }, 
      true
    );    
*/
    //call services
    
  /* 
    vm.getPlayerData();
    vm.getContestantsData();

  }

})();
*/
/*
(function(){
    angular
        .module('survivorApp')
        .controller('playerCtrl', playerCtrl);
        
    playerCtrl.$inject = ['$scope'];
    
    function playerCtrl($scope, SelectedData) {
        var vm = this;
        //console.log(window.location);
        console.log("In Player controller");
        
        vm.content = "Player Data";
        

        
    }
})();
*/

(function() {

  angular
    .module('survivorApp')
    .controller('playerCtrl', playerCtrl);

  playerCtrl.$inject = ['$scope', 'SurvivorData', 'PlayerData', 'SelectedData'];

  function playerCtrl($scope, SurvivorData, PlayerData, SelectedData) {
    // Nasty IE9 redirect hack (not recommended)
    /*
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }*/
    console.log(window.location);    
    
    
    var vm = this;
    vm.content = "Survivor Data";
    vm.selectedContestantName = "";
    vm.selectedSeasonName = "";
    vm.selectedWeight = "";
    
    //check selected Departure
    if(SelectedData.selectedContestantName!== null){
      vm.selectedContestantName = SelectedData.selectedContestantName;
    }
    
    //check selected Arrival
    if(SelectedData.selectedSeasonName !== null){
      vm.selectedSeasonName = SelectedData.selectedSeasonName;
    }
    
    //check selected weight
    if(SelectedData.selectedWeight !== null){
      vm.selectedWeight = SelectedData.selectedWeight;
    }    

   /* //refactored for Angular 1.6 - removed success/error, used Promises...
    vm.getSurvivorData = function() {
      SurvivorData.getSurvivors()
        .then(function(response) {
          vm.survivors = response.data;
          console.log(response);
        })
        .catch(function(e) {
          console.log(e);
        });
    }
*/
    //refactored for Angular 1.6 - removed success/error, used Promises...
    vm.getContestantsData = function() {
      SurvivorData.getContestantsData()
        .then(function(response) {
          vm.contestantsData = response.data;
          console.log("TESTING:" + vm.contestantsData);
        })
        .catch(function(e) {
          console.log(e);
        });
    }

    vm.toggleMenu = function() {
      if (vm.class === "toggled") {
        vm.class = "";
      }
      else {
        vm.class = "toggled";
      }
      console.log(vm.class + " is good");
    };
    
    vm.clearSelectedData = function(){
      
      vm.selectedContestantName = null;
      vm.selectedDepartureICAO = null;
      vm.selectedWeight = null;
    }
    
    //saved departure
    $scope.$watch(
      function(){
        return vm.selectedContestantName;    
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.icao !== oldValue.icao){
          SelectedData.selectedContestantName = newValue;
        } 
      }, 
      true
    );
    
    //saved arrival
    $scope.$watch(
      function(){
        return vm.selectedSeasonName;
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.icao !== oldValue.icao){
          SelectedData.selectedASeasonName = newValue;
        } 
      }, 
      true
    );
    
    //saved weight
    $scope.$watch(
      function(){
        return vm.selectedWeight;
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.weight !== oldValue.weight){
          SelectedData.selectedWeight = newValue;
        } 
      }, 
      true
    );    

    //call services
    vm.getContestantsData();
  //  vm.getClimbData();

  }

})();