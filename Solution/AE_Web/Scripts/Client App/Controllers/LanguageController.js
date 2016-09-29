(function (app) {
    var LanguageController = function ($scope, appService, languagePageUrl) {
        $scope.LanguagePage = {};
        $scope.LanguagePage.ArrayCount = ["1","2"]
        
        appService.getData(languagePageUrl, "FillUpLanguageCombo")
            .success(function (data, status, headers, config) {
                $scope.LanguagePage.Languages = JSON.parse(data.d);
            })
            .error(function (data, status, headers, config) {
                appService.failedXHR(status, languagePageUrl, "FillUpLanguageCombo");
            });

        appService.getData(languagePageUrl, "FillUpCompleteLanguageCombo")
            .success(function (data, status, headers, config) {
                $scope.LanguagePage.LanguageObjects = JSON.parse(data.d);
            })
            .error(function (data, status, headers, config) {
                appService.failedXHR(status, languagePageUrl, "FillUpCompleteLanguageCombo");
            });

        $scope.create = function () {
            appService.sendGetData(languagePageUrl, "NewLanguageEntry", $scope.Create, "dataReceive")
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
                    appService.failedXHR(status, languagePageUrl, "NewLanguageEntry");
                });
        };

        $scope.update = function () {
            appService.sendGetData(languagePageUrl, "ModifyExistingLanguage", $scope.Show.LanguageObject, "dataReceive")
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
                    appService.failedXHR(status, languagePageUrl, "ModifyExistingLanguage");
                });
        };

        $scope.findID = function () {
            appService.sendGetData(languagePageUrl, "GetLanguageIDList", $scope.Find.LanguageName, "dataReceive")
                .success(function (data, status, headers, config) {
                    $scope.LanguagePage.LanguageIDs = JSON.parse(data.d);
                })
                .error(function (data, status, headers, config) {
                    appService.failedXHR(status, languagePageUrl, "GetLanguageIDList");
                });
        };

        $scope.deleteLanguage = function () {
            appService.getData(languagePageUrl, "RemoveLanguageNameStartWithJ")
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
                    appService.failedXHR(status, languagePageUrl, "RemoveLanguageNameStartWithJ");
                });
        };

        var updateComboBox = function () {
            appService.getData(languagePageUrl, "FillUpLanguageCombo")
                .success(function (data, status, headers, config) {
                    $scope.LanguagePage.Languages = JSON.parse(data.d);
                })
                .error(function (data, status, headers, config) {
                    appService.failedXHR(status, languagePageUrl, "FillUpLanguageCombo");
                });

            appService.getData(languagePageUrl, "FillUpCompleteLanguageCombo")
                .success(function (data, status, headers, config) {
                    $scope.LanguagePage.LanguageObjects = JSON.parse(data.d);
                })
                .error(function (data, status, headers, config) {
                    appService.failedXHR(status, languagePageUrl, "FillUpCompleteLanguageCombo");
                });
        };
    };

    LanguageController.$inject = ["$scope", "appService", "languagePageUrl"];

    app.controller("LanguageController", LanguageController);
}(angular.module("angularEntityApp")));