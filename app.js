(function(){
	'use strict';
	angular
	.module('friendsApp', ['friendRoutes','ngMaterial'])
	.config(function($mdThemingProvider){
		$mdThemingProvider.theme('default')
			.primaryPalette('blue')
			.accentPalette('red');
	});
})();