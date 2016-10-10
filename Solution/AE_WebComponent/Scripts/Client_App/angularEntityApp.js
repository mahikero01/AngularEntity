(function (angular) {
    'use strict';
    //debugger;
    angular
    .module('angularEntityApp', [])
    .controller('MainCtrl', function MainCtrl() {
        this.language = {
            name: 'Java'
        };
    })
    //.constant('DefaultPageUrl', 'Default.aspx/');
})(window.angular);