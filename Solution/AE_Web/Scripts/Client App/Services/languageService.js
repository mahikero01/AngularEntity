(function (app) {
    var languageService = function ($http, languagePageUrl) {
        var getData = function (webService) {
            return $http.post(languagePageUrl + webService, { data: {} });
                        
        };

        var sendGetData = function (webService, sendData) {
            return $http({
                method: "POST",
                url: languagePageUrl + webService,
                data: "{dataReceive:" + JSON.stringify(sendData) + "}",
                headers: { "Content-Type": "application/json; charset=utf-8" }
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

        return {
            getData: getData,
            sendGetData: sendGetData,
            failedXHR: failedXHR
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

    app.factory("languageService", languageService);
}(angular.module("angularEntityApp")));