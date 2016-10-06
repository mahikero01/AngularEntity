(function (app) {
    app.controller("LanguageController", function ($scope, $timeout, appService, languagePageUrl) {
        $scope.LanguagePage = {};
        $scope.LanguagePage.ArrayCount = ["1", "2"]
        $scope.roommates = ['Ari', 'Q', 'Sean', 'Anand'];

        //animation using CSS transition see also transition configuration in "content/Site.css"
        $timeout(function () {
            $scope.roommates.push('Ginger');
            $scope.$apply();

            $timeout(function () {
                $scope.roommates.shift();
                $scope.$apply(); // Trigger digest
            }, 2000);
        }, 2000);

        $scope.loading = function () {
            var loadElem = angular.element(document.querySelector("#loadNow"));
            loadElem.addClass("fa fa-refresh fa-spin");
            loadElem.css({
                opacity: 0
            });
            $(loadElem).animate({
                opacity: 1
            }, 1000);

            setTimeout(function () {
                loadElem.css({
                    opacity: 1
                });
                $(loadElem).animate({
                    opacity: 0
                }, 1000);
                setTimeout(function () {
                    loadElem.removeClass("fa fa-refresh fa-spin");
                }, 1000);
            }, 3000);

            //loadElem.
        };

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

    }).$inject = ["$scope", "$timeout", "appService", "languagePageUrl"];
}(angular.module("angularEntityApp")));