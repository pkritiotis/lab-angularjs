/**
* Main AngularJS Web Application
*/
var app = angular.module('pkBlog', [
'ngRoute'
]);


app.factory('Page', function(){
  var title = 'defaultSubheading';
  var heading = 'heading';
  var subHeading = 'default subheading'
  var headerImage = 'assets/img/home-bg.jpg'
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