(function (app) {
    var LanguageController = function ($scope, $http) {
        $scope.LanguagePage = {};
        $http
            .post("Language.aspx/FillUpLanguageCombo", { data: {} })
            .success(function (data, status, headers, config) {
                $scope.LanguagePage.Languages = JSON.parse(data.d);
            });

        $http
            .post("Language.aspx/FillUpCompleteLanguageCombo", { data: {} })
            .success(function (data, status, headers, config) {
                $scope.LanguagePage.LanguageObjects = JSON.parse(data.d);
            });

        $scope.create = function () {
            $http
                ({
                    method : "POST",
                    url: "Language.aspx/NewLanguageEntry",
                    data: "{language:" + JSON.stringify($scope.Create) + "}",
                    headers: { "Content-Type": "application/json; charset=utf-8" }
                })
                .success(function (data, status, headers, config) {
                    $scope.messageList = JSON.parse(data.d);
                    
                    if (angular.equals($scope.messageList[0], "1")) {
                        alert($scope.messageList[1]);
                        $scope.LanguagePage.Languages.push($scope.Create.LanguageName);
                        $scope.LanguagePage.LanguageObjects.push($scope.Create);
                        $scope.Create = null;
                        $scope.messageList = null;
                    }
                    else {
                        alert($scope.messageList[1]);
                        $scope.Create = null;
                        $scope.messageList = null;
                    }
                });
        };

        $scope.update = function () {
            $http
                ({
                    method: "POST",
                    url: "Language.aspx/ModifyExistingLanguage",
                    data: "{language:" + JSON.stringify($scope.Show.LanguageObject) + "}",
                    headers: { "Content-Type": "application/json; charset=utf-8" }
                })
                .success(function (data, status, headers, config) {
                    $scope.messageList = JSON.parse(data.d);

                    if (angular.equals($scope.messageList[0], "1")) {
                        alert($scope.messageList[1]);
                        updateComboBox();
                        $scope.Create = null;
                        $scope.messageList = null;
                    }
                    else {
                        alert($scope.messageList[1]);
                        $scope.Create = null;
                        $scope.messageList = null;
                    }
                });
        };

        var updateComboBox = function () {
            $http
                .post("Language.aspx/FillUpLanguageCombo", { data: {} })
                .success(function (data, status, headers, config) {
                    $scope.LanguagePage.Languages = JSON.parse(data.d);
                });

            $http
                .post("Language.aspx/FillUpCompleteLanguageCombo", { data: {} })
                .success(function (data, status, headers, config) {
                    $scope.LanguagePage.LanguageObjects = JSON.parse(data.d);
                });
        };
    };

    app.controller("LanguageController", LanguageController);
}(angular.module("angularEntityApp")));