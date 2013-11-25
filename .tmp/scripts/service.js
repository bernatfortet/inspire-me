(function() {
  this.Service = (function() {
    Service.prototype.config = null;

    Service.prototype.totalPosts = null;

    function Service(config) {
      this.config = config;
    }

    Service.prototype.parsePosts = function(posts) {
      var key, post, _results;
      _results = [];
      for (key in posts) {
        post = posts[key];
        _results.push(this.parsePost(post));
      }
      return _results;
    };

    Service.prototype.parsePost = function() {};

    Service.prototype.createPost = function(postItem) {
      var newPost;
      return newPost = new Post(postItem);
    };

    return Service;

  })();

}).call(this);
