(function(){
  var SocialZooApp = angular.module("SocialZooApp",['ngRoute', 'ngSanitize', 'oc.lazyLoad']);

  SocialZooApp.config(["$routeProvider", function($routeProvider){
    $routeProvider
    .when('/',{
      templateUrl : 'partials/home/home.html',
      controller : "homeCtrl",
      controllerAs : "storeHome",
      resolve : {
        lazy : ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load({
            name : "Home",
            files : [
                  'app/home/services/homeService.js',
                  'app/home/controllers/homeController.js'
            ]
          })
        }]
      }
    })
    .otherwise({redirectTo : "/"});
  }]);

  SocialZooApp.directive("header",function(){
    return {
      restrict : 'A',
      templateUrl : 'partials/common/header.html'
    }
  });
  SocialZooApp.directive('footer', function(){
    return {
      restrict :'A',
      templateUrl :'partials/common/footer.html'
    }
  });
  SocialZooApp.directive('aside', function(){
    return {
      restrict :'A',
      templateUrl  :'partials/common/aside.html'
    }
  });
})();
