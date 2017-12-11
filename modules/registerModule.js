
angular.module('register', ['ngRoute']);

angular.module('register').controller('registerCtrl', function($scope){
    $scope.title = "Register";
});

angular.module('register').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/register', {
          templateUrl: '/views/register.html',
          controller: 'registerCtrl'
        });
    }
]);