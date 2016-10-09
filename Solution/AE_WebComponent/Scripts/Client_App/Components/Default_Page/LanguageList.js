(function (angular) {
    'use strict';
    function LanguageListController($scope, $element, $attrs) {
        var ctrl = this;
        ctrl.list = [
            {
            name: 'rico'
            },
            {
               name: 'grace'
            }
        ];
        
        //httpService.getData(DefaultPageUrl, 'GetAllLanguages')
        //    .success(function (data, status, headers, config) {
        //        ctrl.Languages = JSON.parse(data.d);
        //    })
        //    .error(function (data, status, headers, config) {
        //        httpService.failedXHR(status, DefaultPageUrl, 'GetAllLanguages');
        //    });
        //ctrl.name = "rico";
    };

    angular.module('angularEntityApp').component('languageList', {
        templateUrl: 'Page_Templates/Default_Page/LanguageList.html',
        controller: LanguageListController,
        bindings:{
            Language: '='
        }
    });
    //.$inject = ['DefaultPageUrl', 'httpService'];
})(window.angular);