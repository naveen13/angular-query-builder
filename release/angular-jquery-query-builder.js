angular.module('angular-jquery-query-builder', [])
.directive('queryBuilder', function () {
	return {
		restrict: "AE",
		require: "ngModel",
		scope: {
			modelResponse: "=ngModel",
			options: "=",
			eventTrigger: "="
		},
		controller: function ($scope, $element) {
			function updateElement() {
				if ($scope.options) {
					$element.queryBuilder($scope.options);
					// set rules
					$element.queryBuilder('setRules', $scope.options.rules);
				}
			}
			$scope.$watch($scope.rules, function (value) {
				rules = value;
				updateElement();
			});
			$scope.$watch($scope.filters, function (value) {
				filters = value;
				updateElement();
			});
			$scope.updateResponse = function(){
				var resJson = $element.queryBuilder('getRules');
				var resSql = $element.queryBuilder('getSQL', false);
				$scope.modelResponse = {json: resJson, sql: resSql.sql};
				$scope.$apply();
			}
		},
		link: function ($scope, $element, $attrs) {
			$element.on("click", $scope.updateResponse);
			console.log($scope.eventTrigger);
			var ele = angular.element($scope.eventTrigger);
			ele.on('click', function(){
				console.log('hi hi');
			})

		}
	}
});
