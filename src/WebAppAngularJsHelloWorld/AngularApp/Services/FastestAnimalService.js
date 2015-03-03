﻿(function () {
	'use strict';

	function FastestAnimalService($http, $log) {

		$log.info("FastestAnimalService called");

		var getAnimals = function () {
			$log.info("FastestAnimalService getAnimals called");
			return $http.get("/api/FastestAnimal")
			.then(function (response) {
				return response.data;
			});
		}

		return {
			getAnimals: getAnimals
		}
	}

	var module = angular.module('mainApp');

	// this code can be used with uglify
	module.factory("FastestAnimalService",
		[
			"$http",
			"$log",
			FastestAnimalService
		]
	);

})();
