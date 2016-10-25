(function (app) {
    app.component('testAnimation', {
        templateUrl: 'Page_Templates/Default_Page/testAnimation.html',
        controller: function testAnimationController() {
            this.inputPage = '';
            this.progLanguages = '';
            this.currentSelection = 0;
            this.toggleSwitchStatus = true;
            this.showStatus = true;
            $('.dateInput').datepicker();

            this.calendar = '12/31/2016'
            this.items = [{
                id: 1,
                label: 'aLabel',
                
            }, {
                id: 2,
                label: 'bLabel',
                
            }
            , {
                id: 3,
                label: 'cLabel',

            }
            ];


            this.id = 3;

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
        controllerAs: 'testAnimationCtrl',
        bindings: {
            initTestAnima:'='
        }
    });
}(angular.module('angularEntityApp')));