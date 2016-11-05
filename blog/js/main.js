/**
* Main AngularJS Web Application
*/
var app = angular.module('pkBlog', [
'ngRoute'
]);

/**
* Configure the Routes
*/
app.config(['$routeProvider', function ($routeProvider) {
$routeProvider
// Home
.when("/", {templateUrl: "partials/home.html"})
// pages…
.when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
.when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
/* etc… routes to other pages… */
// Blog
.when("/post", {templateUrl: "partials/post.html",controller: "BlogCtrl"})
// else 404
.otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);
