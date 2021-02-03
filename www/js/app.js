angular.module('starter',['starter.controllers'])
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

.state('tab.search', {
    url: '/search',
    views: {
      'tab-search': {
        templateUrl: 'templates/tab-search.html',
        controller: 'SearchCtrl'
      }
    }
  })

.state('tab.pantry', {
  url: '/pantry',
  views: {
    'tab-pantry': {
      templateUrl: 'templates/tab-pantry.html',
      controller: 'PantryCtrl'
    }
  }
});



// if none of the above states are matched, use this as the fallback
$urlRouterProvider.otherwise('/tab/profile');

});