'use strict';
var wishlist = angular.module("wishlist", ['ngRoute']);

wishlist.config(function($routeProvider) {
    $routeProvider
        .when("/newitem", {
            templateUrl: "parcials/newitem.html",
            controller: "itemsController"
        }).when("/edititem", {
            templateUrl: "parcials/newitem.html",
            controller: "itemsController"
        }).when("/wishlist", {
            templateUrl: "parcials/tablist.html",
            controller: "itemsController"
        }).when("/boughtlist", {
            templateUrl: "parcials/tablist.html",
            controller: "itemsController"
        })
});

wishlist.controller('itemsController', ['$scope', '$rootScope', "Items",
    function($scope, $rootScope, prod) {
        $scope.ordenarPor = "-costo"
        $scope.items = prod.list;
        $rootScope.actualTab = "wishlist";
        $rootScope.gastoMax = 0;

        $scope.showItem = function(item) {
            if ($scope.actualTab === item) {
                return true;
            };
        }

        $rootScope.addItem = function() {
            var name = document.getElementById("newItemName").value;
            var desc = document.getElementById("newItemDescripcion").value;
            var costo = document.getElementById("newItemCosto").value;
            var img = document.getElementById("newItemIMagen").value;

            prod.add({
                nombre: name,
                descripcion: desc,
                costo: costo,
                //fechaMod: new Date(),
                fechaMod: "2015-08-30T11:34:01.976Z",
                imagen: "http://a693.phobos.apple.com/us/r30/Purple/v4/c8/27/25/c8272541-648a-750b-7292-9fd82b6c3eb0/mzl.ugbojcbl.100x100-75.png",
                status: "wishlist",
                creado: "new Date()"
            });
        }


    }
]);

wishlist.factory("Items", function() {
    var Items = {}

    Items.list = [{
        nombre: "Nombre del producto",
        descripcion: "Descripcion del producto",
        costo: 521,
        //fechaMod: new Date(),
        fechaMod: "2015-08-30T11:34:01.976Z",
        imagen: "http://a693.phobos.apple.com/us/r30/Purple/v4/c8/27/25/c8272541-648a-750b-7292-9fd82b6c3eb0/mzl.ugbojcbl.100x100-75.png",
        status: "wishlist",
        creado: "2015-08-30T11:34:01.976Z"
    }, {
        nombre: "coca cola",
        descripcion: "refresco de cola",
        costo: 15,
        fechaMod: "2015-08-26T11:34:01.976Z",
        imagen: "http://a693.phobos.apple.com/us/r30/Purple/v4/c8/27/25/c8272541-648a-750b-7292-9fd82b6c3eb0/mzl.ugbojcbl.100x100-75.png",
        status: "bought",
        creado: "2015-08-25T11:34:01.976Z"
    }, {
        nombre: "xbox",
        descripcion: "videoconsola",
        costo: 14000,
        fechaMod: "2015-08-21T11:34:01.976Z",
        imagen: "http://a693.phobos.apple.com/us/r30/Purple/v4/c8/27/25/c8272541-648a-750b-7292-9fd82b6c3eb0/mzl.ugbojcbl.100x100-75.png",
        status: "bought",
        creado: "2015-08-20T11:34:01.976Z"
    }, {
        nombre: "ventilador",
        descripcion: "maquina echa aigreee",
        costo: 355,
        fechaMod: "2015-08-31T11:34:01.976Z",
        imagen: "http://a693.phobos.apple.com/us/r30/Purple/v4/c8/27/25/c8272541-648a-750b-7292-9fd82b6c3eb0/mzl.ugbojcbl.100x100-75.png",
        status: "bought",
        creado: "2015-08-15T11:34:01.976Z"
    }];

    Items.add = function(newItem) {
        Items.list.push(newItem);
    };


    return Items;
});