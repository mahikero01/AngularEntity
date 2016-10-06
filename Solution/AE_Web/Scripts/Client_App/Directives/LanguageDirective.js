(function (app) {
    app.directive("helloWorld", function () {
        return {
            restrict: "A",
            
            template: "This is string template"
        };
    });

    app.directive("checkOut", function () {
        return {
            restrict: "A",
            replace: true,
            templateUrl: "Page_Templates/TestTemplate.html"
        };
    });

}(angular.module("angularEntityApp")));