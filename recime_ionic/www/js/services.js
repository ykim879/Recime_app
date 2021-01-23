angular.module('starter.services', [])
.factory('search', function(){
  var search = "Search Ingredients";
  return {
    text: function() {
      return search;
    }
  }
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'potatoes',
    added: '09/26/20',
    face: 'img/potato.png'
  }, {
    id: 1,
    name: 'onions',
    added: '09/25/20',
    face: 'img/onion.png'
  }, {
    id: 2,
    name: 'tomatoes',
    added: '09/21/20',
    face: 'img/tomato.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
