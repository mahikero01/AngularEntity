var example = {
    bindings: {
        //obj: '<'
        prim: '<'
    },
    templateUrl: 'Test2.html'
      
  ,
controller: function () {
    this.updateValues = function () {
        this.prim = 10;
        //this.obj = {
        //    john: {
        //        age: 35,
        //        location: 'Unknown'
        //    }
        //};
    };
}
};

function ParentController() {
    this.somePrimitive = 99;
    //this.someObject = {
    //    todd: {
    //        age: 25,
    //        location: 'England, UK'
    //    }
    //};
    this.updateValues = function () {
        this.somePrimitive = 33;
        //this.someObject = {
        //    jilles: {
        //        age: 20,
        //        location: 'Netherlands'
        //    }
        //};
    };
}

angular
  .module('app', [])
  .component('example', example)
  .controller('ParentController', ParentController);