var remote_ws = "ws/";

angular.module('myApp', [
    'ngRoute',
    'myApp.services',
    'myApp.controllers',
    'ui.bootstrap'
])
        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/login', {templateUrl: 'view/login.html', controller: 'loginCtrl'});
                $routeProvider.when('/home', {templateUrl: 'view/home.html', controller: 'homeCtrl'});

                $routeProvider.otherwise({redirectTo: '/login'});
            }]);
