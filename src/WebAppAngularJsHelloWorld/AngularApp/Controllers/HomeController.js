(function () {
    'use strict';

    var module = angular.module('mainApp');
   
	// this code can be used with uglify
    module.controller('HomeController',
		[
			'$scope',
			function ($scope) {
    			$scope.message = "c-ggooooaaalll";
			}
		]
	);

})();
