/// <reference path="c:\users\hdewani\documents\visual studio 2015\Projects\AngularForTheFirst\AngularForTheFirst\Scripts/angular.min.js" />
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        //var employees = [
        //    {
        //        firstname: 'harsha',
        //        lastname: 'dewani',
        //        //flag: 'Images/usa.png',
        //        country: 'usa',
        //        gender: 'female'
        //    },
        //{
        //    firstname: 'manish',
        //    lastname: 'malhotra',
        //    //flag: 'Images/usa.png',
        //    country: 'usa',
        //    gender: 'male'
        //},
        // {
        //     firstname: 'kavya',
        //     lastname: 'gupta',
        //     // flag: 'Images/usa.png',
        //     country: 'usa',
        //     gender: 'female'
        // }
        //];
        //$scope.employees = employees;
        var countries = [{
            name: "India",
            cities: [
               {name: "Mumbai"},
                {name: "Hyderabad"},
               { name: "Pune"}

            ]},
            {
                name: "USA",
                cities: [
                   { name: "Los Angeles"},
                   { name: "Chicago"},
                   { name: "Houston"}

                ]},
          {
            name: "UK",
            cities: [
                {name: "London"},
                {name: "Manchester"},


            ]}
        ];
        $scope.countries = countries;
    });

