angular.module('video-player')
  .component('videoList', {
    // bind: {
    //   videoData: '<'
    // },
    templateUrl: 'src/templates/videoList.html',
    controller: function() {
      this.videos = window.exampleVideoData;
      console.log('videoList says: ', this);
      //console.log($scope.videos);
      // $scope.add = function() {
      //   $scope.videos.push($scope.newVideo);
      // }
    }
  }).factory('VideoListRender', function($scope) {
    return {
      videoList: $scope.videos
    }
  });