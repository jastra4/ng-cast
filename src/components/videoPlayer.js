angular.module('video-player')
  .component('videoPlayer', {
    bindings: {
      video: '<'
    },
    controller: function() {

      this.url = function(id) {
        return this.video ? (`https://www.youtube.com/embed/${this.video.id.videoId}`) : '';
      };
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
