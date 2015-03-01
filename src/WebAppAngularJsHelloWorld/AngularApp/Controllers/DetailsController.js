(function () {
    'use strict';

    var module = angular.module('mainApp');
   
	// this code can be used with uglify
    module.controller('DetailsController',
		[
			'$scope',
			function ($scope) {
				$scope.message = "c-DetailsControllers";
			}
		]
	);

})();
