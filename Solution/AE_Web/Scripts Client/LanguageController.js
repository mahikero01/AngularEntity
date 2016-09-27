(function (app) {
    var LanguageController = function ($scope, $http) {
        $scope.LanguagePage = {};
        $http
            .post("Language.aspx/FillUpLanguageCombo", { data: {} })
            .success(function (data, status, headers, config) {
                $scope.LanguagePage.Languages = JSON.parse(data.d);
            })
            .error(function (data, status, headers, config) {
                failedXHR(status, "FillUpLanguageCombo");
            });

        $http
            .post("Language.aspx/FillUpCompleteLanguageCombo", { data: {} })
            .success(function (data, status, headers, config) {
                $scope.LanguagePage.LanguageObjects = JSON.parse(data.d);
            })
            .error(function (data, status, headers, config) {
                failedXHR(status, "FillUpCompleteLanguageCombo");
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
                })
                .error(function (data, status, headers, config) {                 
                    failedXHR(status, "NewLanguageEntry");
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
                        $scope.messageList = null;
                    }
                    else {
                        alert($scope.messageList[1]);
                        $scope.messageList = null;
                    }
                })
                .error(function (data, status, headers, config) {
                    failedXHR(status, "ModifyExistingLanguage");
                });
        };

        $scope.findID = function () {
            $http
                ({
                    method: "POST",
                    url: "Language.aspx/GetLanguageIDList",
                    data: "{languageName:" + JSON.stringify($scope.Find.LanguageName) + "}",
                    headers: { "Content-Type": "application/json; charset=utf-8" }
                })
                .success(function (data, status, headers, config) {
                    $scope.LanguagePage.LanguageIDs = JSON.parse(data.d);
                })
                .error(function (data, status, headers, config) {
                    failedXHR(status, "GetLanguageIDList");
                });
        };

        $scope.deleteLanguage = function () {
            $http
                .post("Language.aspx/RemoveLanguageNameStartWithJ", { data: {} })
                .success(function (data, status, headers, config) {
                    $scope.messageList = JSON.parse(data.d);

                    if (angular.equals($scope.messageList[0], "1")) {
                        alert($scope.messageList[1]);
                        updateComboBox();
                        $scope.messageList = null;
                    }
                    else {
                        alert($scope.messageList[1]);
                        $scope.messageList = null;
                    }
                })
                .error(function (data, status, headers, config) {
                    failedXHR(status, "RemoveLanguageNameStartWithJ");
                });
        };

        var updateComboBox = function () {
            $http
                .post("Language.aspx/FillUpLanguageCombo", { data: {} })
                .success(function (data, status, headers, config) {
                    $scope.LanguagePage.Languages = JSON.parse(data.d);
                })
                .error(function (data, status, headers, config) {
                    failedXHR(status, "FillUpLanguageCombo");
                });

            $http
                .post("Language.aspx/FillUpCompleteLanguageCombo", { data: {} })
                .success(function (data, status, headers, config) {
                    $scope.LanguagePage.LanguageObjects = JSON.parse(data.d);
                })
                .error(function (data, status, headers, config) {
                    failedXHR(status, "FillUpCompleteLanguageCombo");
                });
        };

        var failedXHR = function (returnStatus, serviceName) {
            if (angular.equals(returnStatus, 500)) {
                alert("500 Internal Server Error - 'Language.aspx/" + serviceName + "' service is not available")
            } else if (angular.equals(returnStatus, 404)) {
                alert("404 Not Found - 'Language.aspx' page is not available");
            } else {
                alert(returnStatus);
            }
        };
    };

    app.controller("LanguageController", LanguageController);
}(angular.module("angularEntityApp")));