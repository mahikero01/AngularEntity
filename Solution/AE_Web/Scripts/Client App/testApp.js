(function () {
    var app = angular.module("testApp", []);

    app.controller("TestController", function ($scope) {
        $scope.name = "rico";
    });

    app.directive('myDirective', function () {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                myUrl: "@someAttr",
                myLinkText: "@"
            },
            template: '<div><input type="text" ng-model="myUrl"> <a href="{{myUrl}}">{{myLinkText}}</a></div>'
        }
    });
}());