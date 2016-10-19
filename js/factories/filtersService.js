(function() {
	'use strict';

	angular
		.module('filterApp')
		.factory('filtersService', FiltersFactory);

	function FiltersFactory() {		
		var filtersObj = {
			filtersData: filtersData,
		};		
		return filtersObj;
	}

	var filtersData = [
		{
			name: 'Grayscale',
			filter: 'grayscale',
			valType: '%',
			minVal: 0,
			maxVal: 100,
			step: 1,
			value: 0,
			selected: false,
			childValues: null
		},
		{
			name: 'Sepia',
			filter: 'sepia',
			valType: '%',
			minVal: 0,
			maxVal: 100,
			step: 1,
			value: 0,
			selected: false,
			childValues: null
		},
		{
			name: 'Brightness',
			filter: 'brightness',
			valType: '%',
			minVal: 0,
			maxVal: 1000,
			step: 1,
			value: 100,
			selected: false,
			childValues: null
		},
		{
			name: 'Contrast',
			filter: 'contrast',
			valType: '%',
			minVal: 0,
			maxVal: 1000,
			step: 1,
			value: 100,
			selected: false,
			childValues: null
		},
		{
			name: 'Saturate',
			filter: 'saturate',
			valType: '%',
			minVal: 0,
			maxVal: 1000,
			step: 1,
			value: 100,
			selected: false,
			childValues: null
		},
		{
			name: 'Invert',
			filter: 'invert',
			valType: '%',
			minVal: 0,
			maxVal: 100,
			step: 1,
			value: 0,
			selected: false,
			childValues: null
		},
		{
			name: 'Opacity',
			filter: 'opacity',
			valType: '%',
			minVal: 0,
			maxVal: 100,
			step: 1,
			value: 100,
			selected: false,
			childValues: null
		},
		{
			name: 'Blur',
			filter: 'blur',
			valType: 'px',
			minVal: 0,
			maxVal: 100,
			step: 1,
			value: 0,
			selected: false,
			childValues: null
		},
		{
			name: 'Hue Rotate',
			filter: 'hue-rotate',
			valType: 'deg',
			minVal: 0,
			maxVal: 360,
			step: 1,
			value: 0,
			selected: false,
			childValues: null
		},
		{
			name: 'Drop Shadow',
			filter: 'drop-shadow',
			valType: null,
			minVal: null,
			maxVal: null,
			step: null,
			value: null,
			selected: false,
			childValues: [
				{
					name: 'Horizontal Length',
					valType: 'px',
					minVal: 0,
					maxVal: 100,
					step: 1,
					value: 0
				},
				{
					name: 'Vertical Length',
					valType: 'px',
					minVal: 0,
					maxVal: 100,
					step: 1,
					value: 0
				},
				{
					name: 'Blur Radius',
					valType: 'px',
					minVal: 0,
					maxVal: 100,
					step: 1,
					value: 0
				},
				{
					name: 'Color',
					valType: '#',
					value: '000'			
				}
			]
		}
	];

})();