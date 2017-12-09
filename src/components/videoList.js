angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      onClick: '<'
    },
    templateUrl: 'src/templates/videoList.html',
    controller: function() {
      console.log('videoList says: ', this);
    }
  });