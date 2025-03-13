$(document).ready(function () {
    // Sticky navbar
    $("#navbar-wrapper").stick_in_parent();
});

//Routing using AngularJS
var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/main.htm",
        })
        .when("/projects", {
            templateUrl: "pages/projects.htm",
        })
        .when("/photography", {
            templateUrl: "pages/photography.htm",
        });
});

function updateNavbar(index) {
    var items = $(".nav-item");
    items.removeClass("active");
    items.eq(index).addClass("active");
    // console.log($(".nav-item"), index);
}
