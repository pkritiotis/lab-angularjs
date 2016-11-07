/**
* Configure the Routes
*/
app.config(['$routeProvider', function ($routeProvider) {
$routeProvider
// Home
.when("/", {templateUrl: "app/components/home/home.html",controller: "HomeController"})
// pages…
.when("/about", {templateUrl: "app/components/about/about.html", controller: "AboutController"})
.when("/contact", {templateUrl: "app/components/contact/contact.html", controller: "ContactController"})
/* etc… routes to other pages… */
// Blog
.when("/post", {templateUrl: "components/post/post.html",controller: "BlogCtrl"})
// else 404
.otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);