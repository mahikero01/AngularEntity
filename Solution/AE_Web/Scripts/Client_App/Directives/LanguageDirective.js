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