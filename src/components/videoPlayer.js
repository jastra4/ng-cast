angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    current: '<'
  },
  controller: function() {
    // this.url = "https://www.youtube.com/embed/" + this.current.id.videoId;
    // console.log(this.current);
    this.url = function(id) {
      let prefix = "https://www.youtube.com/embed/";
      // console.log(prefix + id);
      return prefix + id;
    }
  },
  templateUrl: "src/templates/videoPlayer.html"
});
