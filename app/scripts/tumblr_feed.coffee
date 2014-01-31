class @TumblrFeed extends Service
	debug: true
	totalPosts: null

	constructor: ->
		super

		this.getLikes()

	getLikes: ->

		$.ajax
			dataType: "jsonp",
			url: this.getDataUrl()
			success: (data) =>
				console.log 'Tumblr ---------------------'
				console.log data

				posts = data.response.posts
				console.log posts

				this.parsePosts( posts )

				this.totalPosts = data.response.totalPosts


	parsePost: ( post ) ->
		#console.log 'Post |', post


		for key, photo of post.photos
			#console.log 'Photo |', photo

			postItem = 
				post_url: post.post_url
				title: post.slug
				image_url: photo.original_size.url
				low_res_image_url: photo.alt_sizes[ photo.alt_sizes.length - 1 ].url
				source: 'tumblr'
				
			this.createPost( postItem )


	getDataUrl: ->
		return "http://api.tumblr.com/v2/blog/#{this.config.username}/posts/photo?&api_key=#{this.config.apiKey}"