(function(){
	'use strict'

	angular
		.module('todoList',['firebase', 'ngRoute'])
		.controller('NavCtrl', NavCtrl);

	NavCtrl.$inject = ['Auth', '$location'];
	function NavCtrl(Auth, $location){
		var nav = this;

		nav.userLoggedIn = Auth.$getAuth();
		console.log('desde nav', nav.userLoggedIn);

		nav.logout = function(){

			Auth.$unauth();
			$location.path('/login');
			location.reload(); // propio de js, recarga toda la página desde cero, para que pinte bien el ususrio
		}
	}	
})();