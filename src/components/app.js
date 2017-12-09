angular.module('video-player')
  .component('app', {
    bindings: {
      result: '<'
    },

    templateUrl: 'src/templates/app.html',
    controller: function(youTube) {
      this.videos = '';
      this.currentVideo = '';
      this.searchService = youTube;
     
      this.selectVideo = function(data) {
        this.currentVideo = data;
      };

      this.searchResults = function(results) {
        // console.log('callback ', text, callback);
        this.videos = results;
        this.currentVideo = results[0];
        // youTube.search(text, callback);
      };

      // this.result = this.result.bind(this);
      this.selectVideo = this.selectVideo.bind(this);
      this.searchResults = this.searchResults.bind(this);
      youTube.search('', this.searchResults);
    }
  });
