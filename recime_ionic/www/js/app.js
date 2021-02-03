// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  //https://scotch.io/tutorials/3-simple-tips-for-using-ui-router
  
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.profile', {
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/tab-profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })

  .state('cookingskill', {
    url: '/profile/cookingskill',
    views: {
      'tab-profile': {
        templateUrl: 'templates/cooking-skill-level.html',
        controller: 'ProfileCtrl'
      }
    }
    // templateUrl: 'templates/cooking-skill-level.html'
  })

  .state('tab.pantry', {
      url: '/pantry',
      views: {
        'tab-pantry': {
          templateUrl: 'templates/tab-pantry.html',
          controller: 'PantryCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/pantry/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
    .state('tab.pantry-add', {
      url: '/pantry/add',
      views: {
        'tab-pantry': {
          templateUrl: 'templates/pantry-add.html',
          controller: 'PantryAddCtrl'
        }
      }
    })
      .state('tab.about', {
          url: '/about',
          views: {
              'tab-about': {
                  templateUrl: 'templates/tab-about.html',
                  controller: 'AboutCtrl'
              }
          }
      })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/profile');

});
