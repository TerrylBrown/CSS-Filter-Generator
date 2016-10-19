(function() {
	'use strict';

	angular
		.module('filterApp')
		.controller('imageCtrl', ImageController);

	ImageController.$inject = ['filtersService'];

	function ImageController(filtersService) {
		var vm = this;

		vm.filtersData = filtersService.filtersData;
		vm.bindCssImage = bindCssImage;
		vm.bindCssCode = bindCssCode;
		
		function bindCssImage() {
			var str = '';
			for (var i = 0; i < vm.filtersData.length; i++) {
				if (vm.filtersData[i].selected === true) {
					if (!vm.filtersData[i].childValues) {
						str += ' ' + vm.filtersData[i].filter + '(' + vm.filtersData[i].value + vm.filtersData[i].valType + ')';	
					} else {
						str += ' ' + vm.filtersData[i].filter + '(';
						for (var ii = 0; ii < vm.filtersData[i].childValues.length; ii++) {
							if (vm.filtersData[i].childValues[ii].valType === 'px') {
								str +=  vm.filtersData[i].childValues[ii].value + vm.filtersData[i].childValues[ii].valType + ' '; 
							} else if (vm.filtersData[i].childValues[ii].valType === '#') {
								str +=  vm.filtersData[i].childValues[ii].valType + vm.filtersData[i].childValues[ii].value; 
							}
						}
						str += ')';	
					}					
				}
			}
			return 'filter: ' + str;
		}

		function bindCssCode(index) {
			if (!vm.filtersData[index].childValues) {
				return ' ' + vm.filtersData[index].filter + '(' + vm.filtersData[index].value + vm.filtersData[index].valType + ')';
			} else {
				var str = '';
				for (var i = 0; i < vm.filtersData[index].childValues.length; i++) {
					if (vm.filtersData[index].childValues[i].valType === 'px') {
						str +=  vm.filtersData[index].childValues[i].value + vm.filtersData[index].childValues[i].valType + ' '; 
					} else if (vm.filtersData[index].childValues[i].valType === '#') {
						str +=  vm.filtersData[index].childValues[i].valType + vm.filtersData[index].childValues[i].value; 
					}
				}
				return ' ' + vm.filtersData[index].filter + '(' + str + ')';
			}
		}

	}

})();