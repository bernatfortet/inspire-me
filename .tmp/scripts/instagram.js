(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.Instagram = (function(_super) {
    __extends(Instagram, _super);

    Instagram.prototype.debug = true;

    function Instagram() {
      Instagram.__super__.constructor.apply(this, arguments);
      this.getLikes();
    }

    Instagram.prototype.getLikes = function() {
      var _this = this;
      return $.ajax({
        dataType: "jsonp",
        url: this.getDataUrl(),
        success: function(data) {
          var posts;
          console.log('Dribbble ---------------------');
          if (_this.debug) {
            console.log(data);
          }
          posts = data.shots;
          if (_this.debug) {
            console.log(posts);
          }
          return _this.parsePosts(posts);
        }
      });
    };

    Instagram.prototype.parsePost = function(post) {
      var postItem;
      postItem = {
        post_url: post.url,
        title: post.title,
        image_url: post.image_url,
        low_res_image_url: post.image_400_url || post.image_teaser_url,
        source: 'dribbble'
      };
      return this.createPost(postItem);
    };

    Instagram.prototype.getDataUrl = function() {
      return "http://api.dribbble.com/players/" + this.config.username + "/shots/likes";
      return "https://api.instagram.com/v1/users/self/media/liked?access_token=21734459.f59def8.69a7f7111fc5471aa96799f62c57529a";
    };

    return Instagram;

  })(Service);

}).call(this);
