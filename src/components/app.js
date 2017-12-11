angular.module('video-player')
  .component('app', {
    bindings: {
      result: '<'
    },

    controller: function(youTube) {
      this.videos = '';
      this.currentVideo = '';
      this.searchService = youTube;
      this.debounce = false;
     
      this.selectVideo = function(data) {
        this.currentVideo = data;
      };

      this.searchResults = function(results) {
        this.videos = results;
        this.currentVideo = results[0];
      };

      this.toggleDebounce = function(val) {
        this.debounce = val;
      };

      this.toggleDebounce = this.toggleDebounce.bind(this);
      this.selectVideo = this.selectVideo.bind(this);
      this.searchResults = this.searchResults.bind(this);
      youTube.search('', this.searchResults, this.debounce, this.toggleDebounce);
    },

    templateUrl: 'src/templates/app.html'
  });
