(function (app) {
    app.animation(".inputTemplate", function () {
         return {
             enter: function(element, done) {
                 $(element).css({
                     opacity: 0,
                 });
                $(element).animate({
                    opacity: 1
                 }, 1000, done);
            },
            leave: function(element, done) {
                done();
            }
        }
    });

    app.factory("fxService", function ($timeout) {

        var loadingIcon = function (idAttributeName) {
            var currentIdAttributeName = angular.element(document.querySelector(idAttributeName));
            currentIdAttributeName.addClass("fa fa-refresh fa-spin");
            currentIdAttributeName.css({
                opacity: 0
            });
            $(currentIdAttributeName).animate({
                opacity: 1
            }, 1000);

            setTimeout(function () {
                currentIdAttributeName.css({
                    opacity: 1
                });
                $(currentIdAttributeName).animate({
                    opacity: 0
                }, 1000);
                setTimeout(function () {
                    currentIdAttributeName.removeClass("fa fa-refresh fa-spin");
                }, 1000);
            }, 3000);
        };

        return {
            loadingIcon: loadingIcon
        };
    }).$inject = ["$timeout"];
}(angular.module("angularEntityApp")));