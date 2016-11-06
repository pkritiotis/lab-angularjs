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
.when("/", {templateUrl: "partials/home.html",controller: "HomeController"})
// pages…
.when("/about", {templateUrl: "partials/about.html", controller: "AboutController"})
.when("/contact", {templateUrl: "partials/contact.html", controller: "ContactController"})
/* etc… routes to other pages… */
// Blog
.when("/post", {templateUrl: "partials/post.html",controller: "BlogCtrl"})
// else 404
.otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);


app.factory('Page', function(){
  var title = 'defaultSubheading';
  var heading = 'heading';
  var subHeading = 'default subheading'
  var headerImage = 'img/home-bg.jpg'
  return {
    title: function() { return title; },
    setTitle: function(newTitle) { title = newTitle; },
    heading: function() { return heading; },
    subHeading: function() { return subHeading; },
    setHeading: function(newHeading) { heading = newHeading; },
    setSubHeading: function(newSubHeading) { subHeading = newSubHeading; },
    headerImage: function() { return headerImage; },
    setHeaderImage: function(newHeaderImage) { headerImage = newHeaderImage; }
  };
});

app.controller('MainPageController',function($scope, Page){
    $scope.Page=Page;
});

app.controller('HomeController', function($scope, Page){
    Page.setHeaderImage("img/home-bg.jpg");
    Page.setTitle("PK - Home");
    Page.setHeading("My AngularJS Blog");
    Page.setSubHeading("Experimenting with AngularJS");
});


app.controller('ContactController', function($scope, Page){
    Page.setHeaderImage("img/contact-bg.jpg");
    Page.setTitle("PK - Contact");
    Page.setHeading("Contact me");
    Page.setSubHeading("ask, ask, ask...");
});

app.controller('AboutController', function($scope, Page){
    Page.setHeaderImage("img/about-bg.jpg");
    Page.setTitle("PK - About");
    Page.setHeading("About me");
    Page.setSubHeading("practicing practicing practicing...");
});