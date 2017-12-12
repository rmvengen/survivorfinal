(function() {

  angular
    .module('survivorApp')
    .factory('SelectedData', selectedData);

  //selectedData.$inject = ['$http'];
  function selectedData () {
      return {
          selectedDepartureICAO : '',
          selectedArrivalICAO : '',
          selectedWeight : ''
      };
  }

})();