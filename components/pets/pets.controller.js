(function(){
	'use strict';
	angular
	.module('friendsApp')
	.controller('petsController', petsController);

	petsController.$inject = ['$q'];

	function petsController($q){
		var vm = this;
		vm.pet = {};

		vm.addUser = function(newPet){
			console.log(newPet);
		}
	}
})();