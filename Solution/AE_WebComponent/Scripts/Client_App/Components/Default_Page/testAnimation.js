(function (app) {
    app.component('testAnimation', {
        templateUrl: 'Page_Templates/Default_Page/testAnimation.html',
        controller: function testAnimationController() {
            this.inputPage = '';
            this.progLanguages = '';
            this.currentSelection = 0;
            this.toggleSwitchStatus = true;
            this.showStatus = true;

            this.getInputPage = function () {
                this.inputPage = 'Page_Templates/Default_Page/third.html';
            };

            this.getPage1 = function () {
                this.currentSelection = 1;
            };

            this.getPage2 = function () {
                this.currentSelection = 2;
            };

            this.showList = function () {
                this.progLanguages = ['C', 'C++', 'Java', 'C#'];
            };

            this.toggleSwitch = function () {
                this.toggleSwitchStatus = !this.toggleSwitchStatus;
            };

            this.toggleShow = function () {
                this.showStatus = !this.showStatus;
            };
        },
        controllerAs: 'testAnimationCtrl'
    });
}(angular.module('angularEntityApp')));