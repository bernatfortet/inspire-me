(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.Behance = (function(_super) {
    __extends(Behance, _super);

    Behance.prototype.debug = true;

    function Behance() {
      Behance.__super__.constructor.apply(this, arguments);
      this.getAppreciations();
    }

    Behance.prototype.getAppreciations = function() {
      var _this = this;
      return $.ajax({
        dataType: "jsonp",
        url: this.getDataUrl(),
        success: function(data) {
          var posts;
          console.log('Behance ---------------------');
          console.log(data);
          posts = data.appreciations;
          console.log(posts);
          return _this.parsePosts(posts);
        }
      });
    };

    Behance.prototype.parsePost = function(post) {
      var postItem;
      postItem = {
        post_url: post.project.url,
        title: post.project.name,
        image_url: post.project.covers['404'],
        low_res_image_url: post.project.covers['202'],
        source: 'behance'
      };
      return this.createPost(postItem);
    };

    Behance.prototype.getDataUrl = function() {
      return "http://www.behance.net/v2/users/" + this.config.username + "/appreciations/?api_key=" + this.config.apiKey;
    };

    return Behance;

  })(Service);

}).call(this);
