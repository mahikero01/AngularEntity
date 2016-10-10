(function (angular) {
    'use strict';
    function LanguageListController($scope, $element, $attrs) {
       var ctrl = this;

        ctrl.person = {
                name: "rico"
        }

    //    //httpService.getData(DefaultPageUrl, 'GetAllLanguages')
    //    //    .success(function (data, status, headers, config) {
    //    //        ctrl.languages = JSON.parse(data.d);
    //    //    })
    //    //    .error(function (data, status, headers, config) {
    //    //        httpService.failedXHR(status, DefaultPageUrl, 'GetAllLanguages');
    //    //    });
    //    //ctrl.person = {
    //    //    Name: "rico"
    //    //}
    };

    angular.module('angularEntityApp').component('languageList', {
        templateUrl: 'Page_Templates/Default_Page/languageList.html',
        controller: LanguageListController,
        bindings: {
            language: '='
        }
    });
    //.$inject = ['DefaultPageUrl', 'httpService'];
})(window.angular);