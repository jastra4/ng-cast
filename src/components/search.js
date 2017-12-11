angular.module('video-player')
  .component('search', {
    bindings: {
      result: '<',
      service: '<',
      debounce: '<',
      toggleDebounce: '<'
    },

    controller: function(youTube) {
      this.handleClick = () => {
        //console.log('toggleDebounce: ', this.toggleDebounce);
        this.service.search(this.videos, (data) => {
          this.result(data);
        }, this.debounce, this.toggleDebounce);
      };

      this.handleClick = this.handleClick.bind(this);
    },

    templateUrl: 'src/templates/search.html'
  });
