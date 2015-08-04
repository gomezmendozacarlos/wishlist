"use strict"

var wishlist = angular.module("wishlist", ['ngRoute']);

wishlist.config(function($routeProvider) {
    $routeProvider
        .when("/newitem", {
            templateUrl: "parcials/newitem.html",
            controller: "itemsController"
        }).when("/edititem", {
            templateUrl: "parcials/edititem.html",
            controller: "itemsController"
        }).when("/wishlist", {
            templateUrl: "parcials/tablist.html",
            controller: "itemsController"
        }).when("/boughtlist", {
            templateUrl: "parcials/tablist.html",
            controller: "itemsController"
        }).when("/imageview", {
            templateUrl: "parcials/imageview.html",
            controller: "itemsController"
        }).otherwise({
            redirectTo: '/wishlist'
        });
});

wishlist.controller('itemsController', ['$scope', '$rootScope', "Items", "$routeParams", "$location",
    function($scope, $rootScope, prod, $routeParams, $location) {
        $scope.ordenarPor = "-costo";
        $scope.items = prod.list;

        $rootScope.itemToEdit;
        $rootScope.imageViewUrl;
        $rootScope.actualTab = "wishlist";
        $rootScope.gastoMax = 15000;
        $rootScope.totalGastado = 0;


        $scope.showItem = function(item) {
            if ($scope.actualTab === item) {
                return true;
            }
        };

        $rootScope.addItem = function() {

            var name = document.getElementById("newItemName").value;
            var desc = document.getElementById("newItemDescripcion").value;
            var costo = document.getElementById("newItemCosto").value;
            var img = document.getElementById("newItemIMagen").value;



            prod.add({
                nombre: name,
                descripcion: desc,
                costo: Number(costo),
                fechaMod: new Date(),
                imagen: img,
                status: "wishlist",
                creado: new Date()
            });

            document.location.href = ("/#/wishlist");

        };

        $scope.editItem = function(item) {

            document.location.href = ("/#/edititem");
            $rootScope.itemToEdit = item;

        };

        $scope.saveEditItem = function() {

            var item = $rootScope.itemToEdit;

            var name = document.getElementById("editItemName").value;
            var desc = document.getElementById("editItemDescripcion").value;
            var costo = document.getElementById("editItemCosto").value;
            var img = document.getElementById("editItemIMagen").value;

            prod.remove(item);

            prod.add({
                nombre: name,
                descripcion: desc,
                costo: Number(costo),
                fechaMod: new Date(),
                imagen: img,
                status: "wishlist",
                creado: item.creado
            });

            document.location.href = ("/#/wishlist");

        };

        $scope.viewImage = function(item) {

            $rootScope.imageViewUrl = item;
            document.location.href = ("/#/imageview");

        };

        $scope.puedoGastar = function(item) {

            var total = 0,
                costo = item.costo,
                suma = 0;

            for (var i = 0; i <= prod.list.length - 1; i++) {
                if (prod.list[i].status === "bought") {
                    total += prod.list[i].costo;
                };
            }

            var suma = Number(total) + Number(costo);

            if (suma <= $rootScope.gastoMax) {
                item.status = "bought";

                 

            } else {
                alert("con esta compra excede el limite fijado. No puede comprar este articulo");
            };

            for (var i = 0; i <= prod.list.length - 1; i++) {              

                    $rootScope.totalGastado += prod.list[i].costo;            
            }

        };
    }
]);

wishlist.factory("Items", function() {

    var Items = {};

    Items.list = [{
        nombre: "Nombre del producto",
        descripcion: "Descripcion del producto",
        costo: 521,
        //fechaMod: new Date(),
        fechaMod: "2015-08-04T11:34:01.976Z",
        imagen: "http://xn--soar-con-e3a.com/wp-content/uploads/2015/05/So%C3%B1ar-con-Computadora.jpg",
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
        fechaMod: "2015-08-05T11:34:01.976Z",
        imagen: "http://a693.phobos.apple.com/us/r30/Purple/v4/c8/27/25/c8272541-648a-750b-7292-9fd82b6c3eb0/mzl.ugbojcbl.100x100-75.png",
        status: "wishlist",
        creado: "2015-08-03T11:34:01.976Z"
    }];

    Items.add = function(newItem) {
        Items.list.push(newItem);
    };

    Items.remove = function(item) {
        var index = Items.list.indexOf(item);
        Items.list.splice(index, 1);
    }

    return Items;
});