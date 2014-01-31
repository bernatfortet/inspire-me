(function() {
  var ImagePost,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.Inspire = (function() {
    Inspire.prototype.servicesMeta = {
      tumblr: {
        username: '',
        apiKey: '4hPGtIdhWb99U54h5W97Rl2EhsPwONJbTk1DTisckc5aLIeWMk'
      },
      behance: {
        username: '',
        apiKey: 'hrRjg1hdm9LxrGOnNKz5wznOlJ1eVLdi'
      },
      dribbble: {
        username: ''
      },
      instagram: {
        username: '',
        apiKey: 'af1520013858492db7e4efe67593d231'
      }
    };

    Inspire.prototype.posts = null;

    Inspire.prototype.wall = null;

    function Inspire() {
      this.onResize = __bind(this.onResize, this);
    }

    Inspire.prototype.init = function() {
      this.servicesMeta.tumblr.username = 'bernatfortet.tumblr.com';
      this.servicesMeta.behance.username = 'bernatfortet';
      this.servicesMeta.dribbble.username = 'bernatfortet';
      this.servicesMeta.instagram.username = 'bernatfortet';
      this.behance = new Behance(this.servicesMeta.behance);
      this.tumblr = new Tumblr(this.servicesMeta.tumblr);
      this.tumblrFeed = new TumblrFeed(this.servicesMeta.tumblr);
      this.dribbble = new Dribbble(this.servicesMeta.dribbble);
      this.wall = $('#Wall');
      this.wall.masonry({
        columnWidth: this.getPostWidth(),
        gutter: 0,
        itemSelector: '.Post'
      });
      this.wall.masonry('unbindResize');
      return $(window).resize(this.onResize);
    };

    Inspire.prototype.onResize = function() {
      this.wall.masonry({
        columnWidth: this.getPostWidth(),
        gutter: 0,
        itemSelector: '.Post'
      });
      return $('.Post').each(function(post) {
        return $(this).height(inspire.getPostWidth);
      });
    };

    Inspire.prototype.getPostWidth = function() {
      var columnsNumber, postWidth;
      columnsNumber = Math.round($('body').width() / 200);
      return postWidth = $('body').outerWidth() / columnsNumber;
    };

    return Inspire;

  })();

  this.Post = (function() {
    Post.prototype.templateName = 'Post';

    Post.prototype.item = {
      post_url: null,
      low_res_image_url: null,
      image_url: null,
      source: null
    };

    function Post(item) {
      this.item = item;
      this.add();
    }

    Post.prototype.add = function() {
      var appendedPost, renderedPost;
      renderedPost = this.render();
      inspire.wall.append(renderedPost);
      appendedPost = inspire.wall.children().last();
      appendedPost.width(inspire.getPostWidth);
      appendedPost.height(inspire.getPostWidth);
      return inspire.wall.masonry('appended', renderedPost);
    };

    Post.prototype.render = function() {
      var renderedTemplate, template, templateSource;
      templateSource = $('#' + this.templateName).html();
      template = Handlebars.compile(templateSource);
      renderedTemplate = template(this.item);
      return $(renderedTemplate);
    };

    return Post;

  })();

  ImagePost = (function() {
    ImagePost.prototype.image_url = '';

    function ImagePost() {}

    return ImagePost;

  })();

}).call(this);
