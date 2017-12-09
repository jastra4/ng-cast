angular.module('video-player')

.service('youTube', function($http){
  this.getVideos = function(query) {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: window.YOUTUBE_API_KEY,
        part: 'snippet',
      },
      data: {
        q: query,
        type: 'video',
        videoEmbeddable: true,
        maxResults: 5
      }
    }).then(function successCallback(response){
      console.log('success ', response);
    }, function errorCallback(response){
      console.log('error ', response);
    })
    console.log('youtube search triggered');
  }
  this.getVideos = this.getVideos.bind(this);
})