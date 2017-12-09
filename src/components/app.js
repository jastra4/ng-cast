angular.module('video-player')

.component('app', {
  bindings: {
    name: '@'
  },
  templateUrl: 'src/templates/app.html',
  controller: function(youTube) {
    this.videos = window.exampleVideoData;
    this.current = window.exampleVideoData[0];
   
    this.change = function(data) {
      this.videos = data;
      this.current = data[0];
    }
    this.change = this.change.bind(this);
    this.newsearch = function(text) {
      console.log('newsearch called');
      youTube.getVideos(text);
    }
    this.newsearch = this.newsearch.bind(this);
  }
});
