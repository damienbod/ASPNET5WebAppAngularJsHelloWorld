(function () {
    'use strict';

    var module = angular.module('mainApp');
   
	// this code can be used with uglify
    module.controller('HomeController',
		[
			'$scope',
			'$log',
			"FastestAnimalService",
			HomeController
		]
	);

    function HomeController($scope, $log, FastestAnimalService) {
    	$log.info("HomeController called");
    	$scope.message = "Home";

    	var getAnimals = function() {
    		FastestAnimalService.getAnimals()
			    .then(onSuccess, onError);
    	}

    	getAnimals();

    	function onSuccess(response) {
    		$scope.animals = response;
    	}

    	function onError(reason) {
    		$scope.error = reason;
    	}
    }

 

})();
