'use strict';
var wishlist = angular.module("wishlist", ['ngRoute']);

wishlist.config(function ($routeProvider){
	$routeProvider
		.when("/newitem",
		{
			templateUrl : "parcials/newitem.html",
			controller: "usersController"
		}).when("/edititem",
		{
			templateUrl : "parcials/newitem.html",
			controller: "usersController"
		}).when("/wishlist",
		{
			templateUrl : "parcials/tablist.html",
			controller: "usersController"
		}).when("/boughtlist",
		{
			templateUrl : "parcials/tablist.html",
			controller: "usersController"
		})
});

wishlist.controller('usersController', ['$scope', function($scope) {
	

}]);

