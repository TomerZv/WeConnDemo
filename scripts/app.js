angular.module('weconnApp', ['ngRoute', 'register']);

angular.module('weconnApp').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.otherwise('/register')
    }
])