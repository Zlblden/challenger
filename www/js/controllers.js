angular.module('app.controllers', [])
  
.controller('challengerCtrl', function($scope) {

})
   
.controller('pickAChallengeCtrl', function($scope) {

})
   
.controller('listOfChallengesCtrl', function($scope) {

})
   
.controller('challengeInfoCtrl', function($scope) {

})
   
.controller('creatingChallengeCtrl', function($scope) {
    var post = { name: 'c', text: 'c' };
    $scope.save = function(){
        post.name = 'adsasda';
        post.text = 123123;
        console.log($scope.name);
        console.log($scope.text);
        console.log(post);
    };
})
 