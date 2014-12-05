// Create Angular Module
var nsPortfolio = angular.module('nsPortfolio', ['ngRoute', 'ngAnimate']);
// Config routing
nsPortfolio.config(function($locationProvider, $routeProvider) {
    // Needed for HTML history.
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl : 'partials/home.html',
            controller  : 'mainController'
        })
        .when('/about', {
            templateUrl : 'partials/about.html',
            controller  : 'aboutController'
        })
        .when('/contact', {
            templateUrl : 'partials/contact.html',
            controller  : 'contactController'
        })
    });
// Controllers
nsPortfolio.controller('mainController', function($scope) {
    $scope.message = "Testing the main page.";
});
nsPortfolio.controller('aboutController', function($scope) {
    $scope.message = "On the about page.";
});
nsPortfolio.controller('contactController', function($scope) {
    $scope.message = "This is the contact page.";
});