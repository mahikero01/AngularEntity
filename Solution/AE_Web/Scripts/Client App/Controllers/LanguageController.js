(function (app) {
    var LanguageController = function ($scope, languageService) {
        $scope.LanguagePage = {};
        
        languageService.getData("FillUpLanguageCombo")
            .success(function (data, status, headers, config) {
                $scope.LanguagePage.Languages = JSON.parse(data.d);
            })
            .error(function (data, status, headers, config) {
                languageService.failedXHR(status, "FillUpLanguageCombo");
            });

        languageService.getData("FillUpCompleteLanguageCombo")
            .success(function (data, status, headers, config) {
                $scope.LanguagePage.LanguageObjects = JSON.parse(data.d);
            })
            .error(function (data, status, headers, config) {
                languageService.failedXHR(status, "FillUpCompleteLanguageCombo");
            });

        $scope.create = function () {
            languageService.sendGetData("NewLanguageEntry", $scope.Create)
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
                    languageService.failedXHR(status, "NewLanguageEntry");
                });
        };

        $scope.update = function () {
            languageService.sendGetData("ModifyExistingLanguage", $scope.Show.LanguageObject)
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
                    languageService.failedXHR(status, "ModifyExistingLanguage");
                });
        };

        $scope.findID = function () {
            languageService.sendGetData("GetLanguageIDList", $scope.Find.LanguageName)
                .success(function (data, status, headers, config) {
                    $scope.LanguagePage.LanguageIDs = JSON.parse(data.d);
                })
                .error(function (data, status, headers, config) {
                    languageService.failedXHR(status, "GetLanguageIDList");
                });
        };

        $scope.deleteLanguage = function () {
            languageService.getData("RemoveLanguageNameStartWithJ")
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
                    languageService.failedXHR(status, "RemoveLanguageNameStartWithJ");
                });
        };

        var updateComboBox = function () {
            languageService.getData("FillUpLanguageCombo")
                .success(function (data, status, headers, config) {
                    $scope.LanguagePage.Languages = JSON.parse(data.d);
                })
                .error(function (data, status, headers, config) {
                    languageService.failedXHR(status, "FillUpLanguageCombo");
                });

            languageService.getData("FillUpCompleteLanguageCombo")
                .success(function (data, status, headers, config) {
                    $scope.LanguagePage.LanguageObjects = JSON.parse(data.d);
                })
                .error(function (data, status, headers, config) {
                    languageService.failedXHR(status, "FillUpCompleteLanguageCombo");
                });
        };
    };

    LanguageController.$inject = ["$scope", "languageService"];

    app.controller("LanguageController", LanguageController);
}(angular.module("angularEntityApp")));