(function(){

var app = angular.module('hexModule');

app.directive('portfolioGenerator', function(){
  return {
    restrict: "E",
    templateUrl: "./partials/project-template.html"
  };
});

})();
