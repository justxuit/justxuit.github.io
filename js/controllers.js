(function(){

var app = angular.module('hexModule', []);

app.controller("projectController", function($scope){
  $scope.projectArray = [
    {
      title: "Shopping Cart",
      img: "images/ss-shoppingcart.png",
      desc: "A simple shopping cart app constructed using vanilla JavaScript, featuring CSS and DOM manipulation."
    },
    {
      title: "Theatre Seat Reservation",
      img: "images/ss-voidtheatre.png",
      desc: "A seat reservation app for a small theatre featuring CSS animations and jQuery."
    },
    {
      title: "To-Do List",
      img: "images/ss-todolist.png",
      desc: "A to-do list application made with AngularJS."
    },
    {
      title: "90's Mad Libs",
      img: "images/ss-madlibs.png",
      desc: "A totally fly single-page 90's MadLibs app built with AngularJS, utilizing persistent form data through a factory."
    }
  ];
});


})();
