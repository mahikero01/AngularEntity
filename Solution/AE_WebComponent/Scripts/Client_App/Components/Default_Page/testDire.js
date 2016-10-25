(function (app) {
    app.directive('testDire', function () {
        return {
            restrict: 'A',
            templateUrl: 'Page_Templates/Default_Page/testDire.html',
            scope: {
                
            },
            bindToController: {
                listingsTestDire: '=listingsTestDire'
            },
            controller: function ($scope) {
                var testDireCtrl = this;
                //testDireCtrl.adopted = testDireCtrl.listingsTestDire;
                testDireCtrl.listingsTestDire.firstName = 'tim';
                testDireCtrl.calendar = '12/31/2016';
            },
            controllerAs: 'testDireCtrl',
            //require: 'ngModel',
            link: function (scope, elem, attrs, testDireCtrl) {
                
                var updateModel = function (dateText) {
                    scope.$apply(function () {
                        testDireCtrl.calendar.$setViewValue(dateText);
                    });
                };
                var options = {
                    
                    dateFormat: "dd/mm/yy",
                    onSelect: function (dateText) {
                        updateModel(dateText);
                    }
                };
                //debugger;
                //$(elem).datepicker(options);
                
            }
        }
    });
}(angular.module('angularEntityApp')));