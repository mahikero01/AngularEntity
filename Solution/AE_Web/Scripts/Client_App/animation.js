(function (app) {
    app.animation('.animateInclude', function() {
         return {
             enter: function(element, done) {
                 $(element).css({
                     opacity: 0,
                 });
                $(element).animate({
                    opacity: 1
                 }, 1000, done);
                // $(element).fadeIn(slow);
            },
            leave: function(element, done) {
                done();
            }
        }
    });
}(angular.module("angularEntityApp")));