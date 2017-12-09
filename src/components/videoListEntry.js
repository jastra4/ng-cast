angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    change: '<'
  },
  controller: function() {
    //console.log('videoListEntry', this);
    //this.vid = videoData;
    //console.log(vid);
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
