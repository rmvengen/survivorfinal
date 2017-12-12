(function() {

    angular
        .module('survivorApp')
        .service('SurvivorData', survivorData);

    survivorData.$inject = ['$http'];

    function survivorData($http) {
        var getContestantsData = function() {
            return $http.get('/api/contestantsData');
        }

        var getClimbDataForWeight = function(weight) {
            return $http.get('/api/climbData/' + weight);
        }
        
        var getLandingDataForWeight = function(weight) {
            return $http.get('/api/climbData/' + weight);
        }        

        return {
            getContestantsData: getContestantsData,
            getClimbDataForWeight : getClimbDataForWeight
        };
    }
})();
