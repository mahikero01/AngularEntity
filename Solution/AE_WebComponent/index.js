(function(angular) {
  'use strict';
angular.module('heroApp', []).controller('MainCtrl', function MainCtrl() {
  this.hero = {
    name: 'Spawn'
  };
  this.clickMe = function () {
      this.hero.name = 'superman';
  };
});
})(window.angular);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/