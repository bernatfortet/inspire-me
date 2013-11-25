class @Dribbble extends Service
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

	

