(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.TumblrFeed = (function(_super) {
    __extends(TumblrFeed, _super);

    TumblrFeed.prototype.debug = true;

    TumblrFeed.prototype.totalPosts = null;

    function TumblrFeed() {
      TumblrFeed.__super__.constructor.apply(this, arguments);
      this.getLikes();
    }

    TumblrFeed.prototype.getLikes = function() {
      var _this = this;
      return $.ajax({
        dataType: "jsonp",
        url: this.getDataUrl(),
        success: function(data) {
          var posts;
          console.log('Tumblr ---------------------');
          console.log(data);
          posts = data.response.posts;
          console.log(posts);
          _this.parsePosts(posts);
          return _this.totalPosts = data.response.totalPosts;
        }
      });
    };

    TumblrFeed.prototype.parsePost = function(post) {
      var key, photo, postItem, _ref, _results;
      _ref = post.photos;
      _results = [];
      for (key in _ref) {
        photo = _ref[key];
        postItem = {
          post_url: post.post_url,
          title: post.slug,
          image_url: photo.original_size.url,
          low_res_image_url: photo.alt_sizes[photo.alt_sizes.length - 1].url,
          source: 'tumblr'
        };
        _results.push(this.createPost(postItem));
      }
      return _results;
    };

    TumblrFeed.prototype.getDataUrl = function() {
      return "http://api.tumblr.com/v2/blog/" + this.config.username + "/posts/photo?&api_key=" + this.config.apiKey;
    };

    return TumblrFeed;

  })(Service);

}).call(this);
