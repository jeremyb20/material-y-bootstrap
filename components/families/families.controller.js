(function(){
	'use strict';
	angular
	.module('friendsApp')
	.controller('familiesController', familiesController);

	familiesController.$inject = ['$q'];

	function familiesController($q){
		var vm = this;
		vm.family = {};

		vm.addFamily = function(newFamilies){
			console.log(newFamilies);
		}
	}
})();