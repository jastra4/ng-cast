angular.module('video-player')

.component('app', {
  bindings: {
    name: '@'
  },
  templateUrl: 'src/templates/app.html',
  controller: function() {
    this.videos = window.exampleVideoData;
    this.current = window.exampleVideoData[0];
   
    this.change = function(data) {
      this.current = data;
    }
    this.change = this.change.bind(this);
    this.newsearch = function(text) {
      console.log('newsearch called');
      module.service('youTube', function() {
        this.getVideos(text);
      });
    }
    this.newsearch = this.newsearch.bind(this);
  }
});
