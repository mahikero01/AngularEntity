(function (app) {
    var LanguageController = function ($scope, $http) {
        $http
            .post("Language.aspx/FillUpLanguageCombo", { data: {} })
            .success(function (data, status, headers, config) {
                $scope.languages = JSON.parse(data.d);
            });

        $http
            .post("Language.aspx/FillUpCompleteLanguageCombo", { data: {} })
            .success(function (data, status, headers, config) {
                $scope.languageObjects = JSON.parse(data.d);
            });

        $scope.create = function () {
            $http
                ({
                    method : "POST",
                    url: "Language.aspx/NewLanguageEntry",
                    data: "{language:" + JSON.stringify($scope.AE_Language) + "}",
                    headers: { "Content-Type": "application/json; charset=utf-8" }
                })
                .success(function (data, status, headers, config) {
                    $scope.messageList = JSON.parse(data.d);
                    
                    if (angular.equals($scope.messageList[0], "1")) {
                        alert($scope.messageList[1]);
                        $scope.languages.push($scope.AE_Language.LanguageName);
                        $scope.AE_Language = null;
                        $scope.messageList = null;
                    }
                    else {
                        alert($scope.messageList[1]);
                        $scope.AE_Language = null;
                        $scope.messageList = null;
                    }
                });
        };
    };

    app.controller("LanguageController", LanguageController);
}(angular.module("angularEntityApp")));