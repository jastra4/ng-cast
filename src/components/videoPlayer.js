angular.module('video-player')

  .controller('VideoPlayerController', function() {
    this.url = () => {
      return this.video ? (`https://www.youtube.com/embed/${this.video.id.videoId}`) : '';
    };    
  })

  .component('videoPlayer', {
    bindings: {
      video: '<'
    },

    controller: 'VideoPlayerController',
    templateUrl: 'src/templates/videoPlayer.html'
  });
