angular.module('starter.controllers', [])

.controller('ProfileCtrl', function($scope) {
  console.log($scope);
})

.controller('PantryCtrl', function($scope, Chats) {
  const searchbar = document.querySelector('ion-searchbar');
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
.controller('PantryAddCtrl', function($scope) {})
.controller('AboutCtrl', function($scope) {
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };

});
