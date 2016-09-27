(function () {
    var app = angular.module("TestApp", []);
    

    app.controller("TestController", function ($scope) {
        $scope.name = "rico";
    });

    app.controller('ParentController', function($scope) {
         $scope.person = {greeted: true};
         });
    
     app.controller('ChildController', function($scope) {
         $scope.sayHello = function() {
             $scope.person.name = "Ari Lerner";
             }
         });
}());