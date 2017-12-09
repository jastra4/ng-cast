angular.module('video-player')

.component('search', {
  controller: function() {
    this.searchtext = '';
  },

  templateUrl: 'src/templates/search.html',

  bindings: {
    searchtext: '<',
    newsearch: '<'
  }
});
