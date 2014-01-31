class @Instagram extends Service
	debug: true
	constructor: ->
		super

		this.getLikes()

	getLikes: ->
		$.ajax
			dataType: "jsonp",
			url: this.getDataUrl()
			success: (data) =>
				console.log 'Dribbble ---------------------'
				console.log data if this.debug

				posts = data.shots

				console.log posts if this.debug

				this.parsePosts( posts )


	parsePost: ( post ) ->
		#console.log 'Post |', post

		postItem = 
			post_url: post.url
			title: post.title
			image_url: post.image_url
			low_res_image_url: post.image_400_url or post.image_teaser_url
			source: 'dribbble'

		this.createPost( postItem )



	getDataUrl: ->
		return "http://api.dribbble.com/players/#{this.config.username}/shots/likes"
		"https://api.instagram.com/v1/users/self/media/liked?access_token=21734459.f59def8.69a7f7111fc5471aa96799f62c57529a"

	

