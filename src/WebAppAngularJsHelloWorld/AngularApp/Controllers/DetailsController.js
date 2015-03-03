(function () {
    'use strict';

    var module = angular.module('mainApp');
   
	// this code can be used with uglify
    module.controller('DetailsController',
		[
			'$scope',
			'$log',
			DetailsControllers
		]
	);

    function DetailsControllers($scope, $log) {
    	$log.info("DetailsControllers called");
    	$scope.message = "c-DetailsControllers";
    }

})();
