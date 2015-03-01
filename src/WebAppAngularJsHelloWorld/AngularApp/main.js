(function () {
	var mainApp = angular.module("mainApp", ['ngRoute']);

	mainApp.config( ['$routeProvider',  function ($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'home.html',
				controller: 'StudentController'
			})
			.when('/viewStudents', {
				templateUrl: 'viewStudents.html',
				controller: 'StudentController'
			})
			.otherwise({
				redirectTo: '/home'
			});
		}]
	);

	mainApp.controller('StudentController', ['$scope', function ($scope) {
			$scope.students = [
				{ name: 'Mark Waugh', city: 'New York' },
				{ name: 'Steve Jonathan', city: 'London' },
				{ name: 'John Marcus', city: 'Paris' }
			];

			$scope.message = "Click on the hyper link to view the students list.";
		}]
	);

})();