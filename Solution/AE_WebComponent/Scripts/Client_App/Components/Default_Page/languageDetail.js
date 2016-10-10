(function (app) {
    app.component('languageDetail', {
        templateUrl: 'Page_Templates/Default_Page/languageDetail.html',
        controller: function LanguageDetailController() {
            this.changValue = function () {
                this.lang.name = 'c++';
            };
        },
        controllerAs: 'LanguageDetailCtrl',
        bindings: {
            lang: '<'
        }
    });
}(angular.module('angularEntityApp')));