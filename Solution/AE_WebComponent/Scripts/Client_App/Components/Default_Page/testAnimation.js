(function (app) {
    app.component('testAnimation', {
        templateUrl: 'Page_Templates/Default_Page/testAnimation.html',
        controller: function testAnimationController() {
            this.inputPage = '';
            this.progLanguages = '';
            this.getInputPage = function () {
                this.inputPage = 'Page_Templates/Default_Page/third.html';
            };
            this.showList = function () {
                this.progLanguages = ['C', 'C++', 'Java', 'C#'];
            };
        },
        controllerAs: 'testAnimationCtrl'
    });
}(angular.module('angularEntityApp')));