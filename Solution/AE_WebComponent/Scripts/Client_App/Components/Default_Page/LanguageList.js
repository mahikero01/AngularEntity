(function (app) {
    app.component('languageList', {
        templateUrl: 'Page_Templates/Default_Page/languageList.html',
        controller: function LanguageListController() {
            this.language = {
                name: 'Java'
            };

            this.clickMe = function () {
                this.language.name = 'C#';
            };

            this.listings = 
                {
                    'firstName': 'Rico',
                    'lastName' : 'Sarm'
                }
            ;
        },
        controllerAs: 'LanguageListCtrl'
    });
}(angular.module('angularEntityApp')));