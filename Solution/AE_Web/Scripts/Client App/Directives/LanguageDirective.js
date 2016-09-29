(function (app) {
    //var helloWorld = function () {
    //    return {
    //        restrict: "A",
    //        template: "heloo"
    //    };
    //};

    //var  = function () {
    //    return {
    //        restrict: "A",
    //        template: "heloo"
    //    };
    //};

    app.directive("helloWorld", function () {
        return {
            restrict: "A",
            template: "heloo"
        };
    });

    app.directive("checkOut", function () {
        return {
            restrict: "A",
            replace: true,
            templateUrl: "Scripts/Client App/Directives/Templates/TestTemplate.html"
        };
    });

}(angular.module("angularEntityApp")));