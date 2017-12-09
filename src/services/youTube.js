angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function(query, searchResults) {
      console.log('this.search running'),
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
      }).then(function successCallback(response) {
        if (searchResults) {
          searchResults(response.data.items);
        }
        console.log('success ', response);
      }, function errorCallback(response) {
        console.log('error ', response);
   
      });
      console.log('youtube search triggered');
    };
    this.search = this.search.bind(this);
  });