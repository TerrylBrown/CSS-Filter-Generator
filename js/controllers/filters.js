(function() {
	'use strict';

	angular
		.module('filterApp')
		.controller('filtersCtrl', FiltersController);		

	FiltersController.$inject = ['filtersService'];

	function FiltersController(filtersService) {
		var vm = this;

		vm.filtersData = filtersService.filtersData;	
		
	}

})();