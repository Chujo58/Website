$(document).ready(function () {
    // Sticky navbar
    // var aboveHeight = $("#navbar-wrapper").outerHeight();

    // $(window).scroll(function () {
    //     console.log($(window).scrollTop());
    //     if ($(window).scrollTop() >= aboveHeight) {
    //         $("#navbar-wrapper")
    //             .addClass("fixed")
    //             .css("top", "0")
    //             .next()
    //             .css("padding-top", "60px");
    //     } else {
    //         $("#navbar-wrapper")
    //             .removeClass("fixed")
    //             .css("top", "")
    //             .next()
    //             .css("padding-top", "0");
    //     }
    // });

    $("#navbar-wrapper").stick_in_parent();

    // Some weird routing option using jQuery
    // function showPage(pageID) {
    //     $(".page").removeClass("active");
    //     $("#" + pageID).addClass("active");
    // }

    // if (window.location.hash) {
    //     showPage(window.location.hash.substring(1));
    // } else {
    //     showPage("home");
    // }

    // $(window).on("hashchange", function () {
    //     showPage(window.location.hash.substring(1));
    // });

    // $("#utility-navbar a").click(function (event) {
    //     event.preventDefault();
    //     window.location.hash = this.hash;
    // });
});

//Routing using AngularJS
var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/main.htm",
        })
        .when("/projects", {
            templateUrl: "routing/red.htm",
        })
        .when("/photography", {
            templateUrl: "routing/blue.htm",
        });
});
