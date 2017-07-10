(function(){
	'use strict';
	angular
	.module('friendsApp')
	.controller('usersController', usersController);

	usersController.$inject = ['$q'];

	function usersController($q){
		var vm = this;
		vm.user = {};

		vm.addUser = function(newUser){
			console.log(newUser);
		}
	}
})();