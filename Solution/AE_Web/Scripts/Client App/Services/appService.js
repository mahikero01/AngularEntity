(function (app) {
    var appService = function ($http) {
        var getData = function (webPage, webService) {
            return $http.post(webPage + webService, { data: {} });
                        
        };

        var sendGetData = function (webPage, webService, sendData, dataReceive) {
            return $http({
                method: "POST",
                url: webPage + webService,
                data: "{" + dataReceive + ":" + JSON.stringify(sendData) + "}",
                headers: { "Content-Type": "application/json; charset=utf-8" }
            });
        };

        var failedXHR = function (returnStatus, webPage, serviceName) {
            if (angular.equals(returnStatus, 500)) {
                alert("500 Internal Server Error - '" + webPage + serviceName + "' service is not available")
            } else if (angular.equals(returnStatus, 404)) {
                alert("404 Not Found - '" + webPage + "' page is not available");
            } else {
                alert(returnStatus);
            }
        };

        return {
            getData: getData,
            sendGetData: sendGetData,
            failedXHR: failedXHR
        };
    };

    app.factory("appService", appService);
}(angular.module("angularEntityApp")));