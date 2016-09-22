(function (app) {
    var languageService = function ($http, languageUrl) {
        var LanguagesSelection = function () {
            return $http.post(languageUrl + "LanguagesSelection", { data: {} })
        };

        return {
            LanguagesSelection: LanguagesSelection
        };
    };

    app.factory("languageService", languageService);
}(angular.module("angularEntityApp")));