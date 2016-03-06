var app = angular.module('myApp', ['angular-jquery-query-builder'])
.controller('AppCtrl', function ($scope) {
	$scope.options = {
		filters: [{
			id: 'core_ID',
			type: 'integer',
			operators: ['equal', 'not_equal', 'in', 'not_in']
		}, {
			id: 'store_id',
			label: 'Store ID',
			type: 'string',
			operators: ['equal', 'not_equal', 'in', 'not_in']
		}],
		rules: {
			"condition": "AND",
			"rules": [{
				"id": "core_ID",
				"field": "core_ID",
				"type": "integer",
				"input": "text",
				"operator": "in",
				"value": "1240"
			}]
		}
	};
});
