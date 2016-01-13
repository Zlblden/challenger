angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('challenger', {
      url: '/home',
      templateUrl: 'templates/challenger.html',
      controller: 'challengerCtrl'
    })
        
      
    
      
        
    .state('pickAChallenge', {
      url: '/pick',
      templateUrl: 'templates/pickAChallenge.html',
      controller: 'pickAChallengeCtrl'
    })
        
      
    
      
        
    .state('listOfChallenges', {
      url: '/list',
      templateUrl: 'templates/listOfChallenges.html',
      controller: 'listOfChallengesCtrl'
    })
        
      
    
      
        
    .state('challengeInfo', {
      url: '/info',
      templateUrl: 'templates/challengeInfo.html',
      controller: 'challengeInfoCtrl'
    })
        
      
    
      
        
    .state('creatingChallenge', {
      url: '/create',
      templateUrl: 'templates/creatingChallenge.html',
      controller: 'creatingChallengeCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});