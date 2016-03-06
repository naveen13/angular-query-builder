angular.module('angular-jquery-query-builder')
.directive('queryBuilder', function () {
	return {
		restrict: "AE",
		require: "ngModel",
		scope: {
			modelResponse: "=ngModel",
			rules: "=",
			filters: "="
		},
		controller: function ($scope, $element) {
			function updateElement() {
				if ($scope.filters && $scope.rules) {
					$element.queryBuilder({
						sortable: true,
						filters: $scope.filters
					});
					// set rules
					$element.queryBuilder('setRules', $scope.rules);
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
		}
	}
});
