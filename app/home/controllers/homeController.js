angular.module("SocialZooApp", ['ngSanitize']).controller("homeCtrl",["$scope","posts", function ($scope,posts){
  $scope.posts = posts.get();
  console.log("coucou");
  console.log($scope.posts);
}]);
