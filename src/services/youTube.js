angular.module('video-player')

.service('youTube', function($http){
  this.getVideos = function(query, setvideolist) {
    $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: window.YOUTUBE_API_KEY,
        q: query,
        type: 'video',
        videoEmbeddable: true,
        maxResults: 5,
        part: 'snippet'
      },
    }).then(function successCallback(response){
      setvideolist(response.data.items);
      console.log('success ', response);
    }, function errorCallback(response){
      console.log('error ', response);
 
    })
    console.log('youtube search triggered');
  }
  this.getVideos = this.getVideos.bind(this);
})