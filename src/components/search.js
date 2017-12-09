angular.module('video-player')
  .component('search', {
    bindings: {
      result: '<',
      service: '<'
    },
    controller: function(youTube) {

      this.handleClick = () => {
        this.service.search(this.videos, (data) => {
          this.result(data);
        });
      };

      this.handleClick = this.handleClick.bind(this);
    },

    templateUrl: 'src/templates/search.html'

  });
