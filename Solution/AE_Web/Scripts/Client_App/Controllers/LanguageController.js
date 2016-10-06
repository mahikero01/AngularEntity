(function (app) {
    app.controller("LanguageController", function ($scope, $timeout, httpService, fxService, languagePageUrl) {
        $scope.LanguagePage = {};
        $scope.LanguagePage.ArrayCount = ["1", "2"]
        $scope.roommates = ['Ari', 'Q', 'Sean', 'Anand'];
        $scope.LanguagePage.InputTemplate = 'Page_Templates/first.html';

        //animation using CSS transition see also transition configuration in "content/Site.css"
        $timeout(function () {
            $scope.roommates.push('Ginger');
            $scope.$apply();

            $timeout(function () {
                $scope.roommates.shift();
                $scope.$apply(); // Trigger digest
            }, 2000);
        }, 2000);
        //debugger;

        $scope.showTemplate = function (requestTemplate) {
            $scope.LanguagePage.InputTemplate = requestTemplate;
        };

        $scope.processSomething = function () {
            fxService.loadingIcon("#loadNow");
        };

        httpService.getData(languagePageUrl, "FillUpLanguageCombo")
            .success(function (data, status, headers, config) {
                $scope.LanguagePage.Languages = JSON.parse(data.d);
            })
            .error(function (data, status, headers, config) {
                httpService.failedXHR(status, languagePageUrl, "FillUpLanguageCombo");
            });

        httpService.getData(languagePageUrl, "FillUpCompleteLanguageCombo")
            .success(function (data, status, headers, config) {
                $scope.LanguagePage.LanguageObjects = JSON.parse(data.d);
            })
            .error(function (data, status, headers, config) {
                httpService.failedXHR(status, languagePageUrl, "FillUpCompleteLanguageCombo");
            });

        $scope.create = function () {
            httpService.sendGetData(languagePageUrl, "NewLanguageEntry", $scope.Create, "dataReceive")
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
                    httpService.failedXHR(status, languagePageUrl, "NewLanguageEntry");
                });
        };

        $scope.update = function () {
            httpService.sendGetData(languagePageUrl, "ModifyExistingLanguage", $scope.Show.LanguageObject, "dataReceive")
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
                    httpService.failedXHR(status, languagePageUrl, "ModifyExistingLanguage");
                });
        };

        $scope.findID = function () {
            httpService.sendGetData(languagePageUrl, "GetLanguageIDList", $scope.Find.LanguageName, "dataReceive")
                .success(function (data, status, headers, config) {
                    $scope.LanguagePage.LanguageIDs = JSON.parse(data.d);
                })
                .error(function (data, status, headers, config) {
                    httpService.failedXHR(status, languagePageUrl, "GetLanguageIDList");
                });
        };

        $scope.deleteLanguage = function () {
            httpService.getData(languagePageUrl, "RemoveLanguageNameStartWithJ")
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
                    httpService.failedXHR(status, languagePageUrl, "RemoveLanguageNameStartWithJ");
                });
        };

        var updateComboBox = function () {
            httpService.getData(languagePageUrl, "FillUpLanguageCombo")
                .success(function (data, status, headers, config) {
                    $scope.LanguagePage.Languages = JSON.parse(data.d);
                })
                .error(function (data, status, headers, config) {
                    httpService.failedXHR(status, languagePageUrl, "FillUpLanguageCombo");
                });

            httpService.getData(languagePageUrl, "FillUpCompleteLanguageCombo")
                .success(function (data, status, headers, config) {
                    $scope.LanguagePage.LanguageObjects = JSON.parse(data.d);
                })
                .error(function (data, status, headers, config) {
                    httpService.failedXHR(status, languagePageUrl, "FillUpCompleteLanguageCombo");
                });
        };

    }).$inject = ["$scope", "$timeout", "httpService", "fxService", "languagePageUrl"];
}(angular.module("angularEntityApp")));