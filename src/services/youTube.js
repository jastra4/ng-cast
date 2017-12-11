angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function(query, searchResults, debounce, toggleDebounce) {
      if (debounce === false) { 
        toggleDebounce(true);
        setTimeout(function(){toggleDebounce(false);}, 500);
        $http({
          method: 'GET',
          url: 'https://www.googleapis.com/youtube/v3/search',
          params: {
            key: window.YOUTUBE_API_KEY,
            q: query,
            type: 'video',
            videoEmbeddable: true,
            maxResults: 10,
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
      } else {
        console.log('request debounced!');
      }
    };
    this.search = this.search.bind(this);
  });