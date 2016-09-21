(function (app) {
    var LanguageController = function ($scope, $http) {
        $http.post('Language.aspx/LanguagesSelection', { data: {} })
        //languageService.LanguagesSelection()
            .success(function (data, status, headers, config) {
                //alert(data.d);
                $scope.testi = JSON.parse(data.d);
                //$scope.testi = ["Rico", "grace"];

            });
        
    };

    //LanguageController.$inject = ["$scope", "languageService"];

    app.controller("LanguageController", LanguageController)
        //.config(function ($httpProvider) {

        //$httpProvider.defaults.headers.post = {};

        //$httpProvider.defaults.headers.post["Content-Type"] = "application/json; charset=utf-8";
        //})
    ;
}(angular.module("angularEntityApp")));