class @Behance extends Service
	debug: true

	constructor: ->
		super
		this.getAppreciations()

	getAppreciations: ->
		$.ajax
			dataType: "jsonp",
			url: this.getDataUrl()
			success: (data) =>
				console.log 'Behance ---------------------'
				console.log data
				
				posts = data.appreciations
				console.log posts
				this.parsePosts( posts )


	parsePost: ( post ) ->
		#console.log 'Post |', post

		postItem = 
			post_url: post.project.url
			title: post.project.name
			image_url: post.project.covers['404']
			low_res_image_url: post.project.covers['202']
			source: 'behance'

		this.createPost( postItem )

	getDataUrl: ->
		return "http://www.behance.net/v2/users/#{this.config.username}/appreciations/?api_key=#{this.config.apiKey}"