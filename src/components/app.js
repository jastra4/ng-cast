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
        this.current = data;
      };
      
      this.setvideolist = function(videos) {
        this.videos = videos;
        this.current = videos[0];
      };

      this.newsearch = function(text) {
        youTube.getVideos(text, this.setvideolist);
      };

      this.setvideolist = this.setvideolist.bind(this);
      this.change = this.change.bind(this);
      this.newsearch = this.newsearch.bind(this);
    }
  });
