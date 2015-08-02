'use strict';
var wishlist = angular.module("wishlist", ['ngRoute']);

wishlist.config(function ($routeProvider){
	$routeProvider
		.when("/newitem",
		{
			templateUrl : "parcials/newitem.html",
			controller: "itemsController"
		}).when("/edititem",
		{
			templateUrl : "parcials/newitem.html",
			controller: "itemsController"
		}).when("/wishlist",
		{
			templateUrl : "parcials/tablist.html",
			controller: "itemsController"
		}).when("/boughtlist",
		{
			templateUrl : "parcials/tablist.html",
			controller: "itemsController"
		})
});

wishlist.controller('itemsController', ['$scope','$rootScope',"Items", function($scope,$rootScope, prod) {	
	$scope.ordenarPor = "-costo"
	$scope.items = prod.list;
	$rootScope.actualTab = "wishlist";
	$scope.showItem = function(item) {
		if($scope.actualTab === item ){ return true;};
	} 
}]);

wishlist.factory("Items", function() {
	var Items = {}

	Items.list = [{
		nombre: "Nombre del producto",
		descripcion: "Descripcion del producto",
		costo: 521,
		fechaMod: 54654,
		imagen : "http://a693.phobos.apple.com/us/r30/Purple/v4/c8/27/25/c8272541-648a-750b-7292-9fd82b6c3eb0/mzl.ugbojcbl.100x100-75.png",
		status: "wishlist",
		creado :  65454
	},
	{
		nombre: "coca cola",
		descripcion: "refresco de cola",
		costo: 15,
		fechaMod: 6541,
		imagen : "http://a693.phobos.apple.com/us/r30/Purple/v4/c8/27/25/c8272541-648a-750b-7292-9fd82b6c3eb0/mzl.ugbojcbl.100x100-75.png",
		status: "comprado",
		creado :  65454
	},
	{
		nombre: "xbox",
		descripcion: "videoconsola",
		costo: 14000,
		fechaMod: 6541,
		imagen : "http://a693.phobos.apple.com/us/r30/Purple/v4/c8/27/25/c8272541-648a-750b-7292-9fd82b6c3eb0/mzl.ugbojcbl.100x100-75.png",
		status: "comprado",
		creado :  65454
	},
	{
		nombre: "ventilador",
		descripcion: "maquina echa aigreee",
		costo: 355,
		fechaMod: 6541,
		imagen : "http://a693.phobos.apple.com/us/r30/Purple/v4/c8/27/25/c8272541-648a-750b-7292-9fd82b6c3eb0/mzl.ugbojcbl.100x100-75.png",
		status: "comprado",
		creado :  65454
	}
	];

	Items.add = function(message){
    	Items.list.push({id: messages.list.length, text: message});
  };


	return Items;
});

