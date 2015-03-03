(function () {
    'use strict';

    var module = angular.module('mainApp');
   
	// this code can be used with uglify
    module.controller('DetailsController',
		[
			'$scope',
			'$log',
			"FastestAnimalService",
			"$routeParams",
			DetailsControllers
		]
	);

    function DetailsControllers($scope, $log, FastestAnimalService, $routeParams) {
    	$log.info("DetailsControllers called");
    	$scope.message = "Animal Details";
    	$scope.Id = $routeParams.Id;
    	$log.info("DetailsControllers called for: " + $scope.Id);

    	var getAnimals = function () {
    		FastestAnimalService.getAnimal($scope.Id)
			    .then(onSuccess, onError);
    	}

    	getAnimals($routeParams.Id);

    	function onSuccess(response) {
    		$scope.animal = response;
    	}

    	function onError(reason) {
    		$scope.error = reason;
    	}
    }

})();
