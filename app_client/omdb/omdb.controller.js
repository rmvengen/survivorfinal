(function() {

    angular
        .module('survivorApp')
        .controller('omdbCtrl', omdbCtrl);

    omdbCtrl.$inject = ['$scope', 'SelectedData', 'onlinemovieDatabase'];

    function omdbCtrl($scope, SelectedData, onlinemovieDatabase) {

        var vm = this;
        console.log(window.location);

        vm.content = "Online Movie Database";

        vm.selectedTitle = "";
        vm.selectedArrivalICAO = "";
        vm.selectedWeight = "";

        //check selected Departure
        if (SelectedData.selectedTitle !== null) {
            vm.selectedTitle = SelectedData.selectedTitle;
        }
        
        //check selected Arrival
        if (SelectedData.selectedArrivalICAO !== null) {
            vm.selectedArrivalICAO = SelectedData.selectedArrivalICAO;
        }

        //check selected weight
        if (SelectedData.selectedWeight !== null) {
            vm.selectedWeight = SelectedData.selectedWeight;
        }

        //refactored for Angular 1.6 - removed success/error, used Promises...
        vm.getDepartureWeather = function() {
            
            var t = vm.selectedTitle;
            console.log(t);
            var y = vm.selectedYear;
            console.log(y);            

            onlinemovieDatabase.getOMdb(t, y)
                .then(function(response) {
                    vm.departureWeather = response.data;
                    console.log(vm.departureWeather);
                })
                .catch(function(e) {
                    console.log(e);
                });
        }

        //refactored for Angular 1.6 - removed success/error, used Promises...        
        vm.getArrivalWeather = function() {
            
            var lat = vm.selectedArrivalICAO.airportLat;
            var lon = vm.selectedArrivalICAO.airportLon;

            //refactored for Angular 1.6 - removed success/error, used Promises...
            onlinemovieDatabase.getOmdb(lat, lon)
                .then(function(response) {
                    vm.arrivalWeather = response.data;
                    console.log(vm.arrivalWeather);
                })
                .catch(function(e) {
                    console.log(e);
                });
        }
        
        //call services
        vm.getDepartureWeather();
        vm.getArrivalWeather();

    }

})();
