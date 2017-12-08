angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<'
  },
  controller: function() {
    console.log(this);
    //this.vid = videoData;
    //console.log(vid);
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
