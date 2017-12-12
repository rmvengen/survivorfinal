(function() {

    angular
        .module('survivorApp')
        .service('SurvivorData', survivorData);

    survivoreData.$inject = ['$http'];

    function survivorData($http) {
        var getClimbData = function() {
            return $http.get('/api/climbData');
        }

        var getClimbDataForWeight = function(weight) {
            return $http.get('/api/climbData/' + weight);
        }
        
        var getLandingDataForWeight = function(weight) {
            return $http.get('/api/climbData/' + weight);
        }        

        return {
            getClimbData: getClimbData,
            getClimbDataForWeight : getClimbDataForWeight
        };
    }
})();
