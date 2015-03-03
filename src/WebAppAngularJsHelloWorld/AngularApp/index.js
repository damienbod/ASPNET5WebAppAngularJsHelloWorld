(function () {
	var mainApp = angular.module("mainApp", ['ngRoute']);

	mainApp.config( ['$routeProvider',  function ($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'templates/home.html',
				controller: 'HomeController'
			})
			.when('/details/:Id', {
				templateUrl: 'templates/details.html',
				controller: 'DetailsController'
			})
			.otherwise({
				redirectTo: '/home'
			});
		}]
	);

})();