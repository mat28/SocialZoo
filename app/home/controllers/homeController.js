angular.module("SocialZooApp.controllers", ['ngSanitize',"SocialZooApp.services"]).controller("homeCtrl",["$scope","posts", function ($scope,posts){
  posts.get().then(function(res){
    $scope.posts = res;
  });
}]);
