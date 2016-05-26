(function(){
	'use strict'

	angular	
		.module('todoList')
		.config(configuration);

		configuration.$inject = ['$routeProvider'];

		function configuration($routeProvider){
			$routeProvider.when('/',{
				controller: 'homeCtrl',
				controllerAs: 'home',
				templateUrl: 'app/views/home/home.html',

				resolve: {
					'currentAuth': ['Auth', function(Auth) {
						return Auth.$waitForAuth();
					}]
				}
			}).when('/login',{
				controller: 'loginCtrl',
				controllerAs: 'login',
				templateUrl: 'app/views/login/login.html'
			}).when('/register',{
				controller: 'registerCtrl',
				controllerAs: 'register',
				templateUrl: 'app/views/register/register.html'
			}).otherwise({
				redirectTo: '/'
			});
		}
})();