angular.module("SocialZooApp.services",['ngResource']).factory("posts",function($resource, $q, $http){
  return {
    posts : null,
    get(id = null){
      let deferred = $q.defer();//$q est le service des promises en angular, le defer va créer une promesse avec le status 'pending'
      if(!this.posts && id != null){
        let Posts = $resource('/posts/:postId',{postId:'@id'});
        this.posts = Posts.get({postId:id});
        deferred.resolve(this.posts);
      }
      else if(!this.posts && id == null){
        let Posts = $resource('https://jsonplaceholder.typicode.com/posts');
        this.posts = Posts.query();
        deferred.resolve(this.posts);
      }
      return deferred.promise;
    }
  }
});
