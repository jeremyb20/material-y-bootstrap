(function(){
	'use strict';
	angular
	.module('friendRoutes',['ui.router','oc.lazyLoad','angularCSS'])
	.config(configuration)
	.controller('tabCtrl', tabCtrl);

	configuration.$inject = ['$stateProvider','$urlRouterProvider'];

	function configuration($stateProvider,$urlRouterProvider){
		$stateProvider
		.state('users', {
			url: '/usuarios',
			templateUrl: 'components/users/users.view.html',
			css: 'components/users/users.style.css',
			resolve: {
				load: ['$ocLazyLoad', function($ocLazyLoad){
					return $ocLazyLoad.load('components/users/users.controller.js')
				}]
			},
			controller: 'usersController',
			controllerAs: 'vm'
		})

		$urlRouterProvider.otherwise('/usuarios');
	};

	function tabCtrl($scope,$location,$log){
		$scope.selectedIndex = 0;

		$scope.$watch('selectedIndex', function(current,old){
			switch(current){
				case 0:
					$location.url("/usuarios");
				break;
				case 1:
					$location.url("/");
				break;
				case 2:
					$location.url("/");
				break;
			};
		});
	}
})();