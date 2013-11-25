class @Service
	config: null
	totalPosts: null

	constructor: ( config ) ->
		this.config = config

	parsePosts: ( posts ) ->
		for key, post of posts
			this.parsePost( post )

	parsePost: ->

	createPost: ( postItem ) ->
		#inspire.posts.push( newPost )
		newPost = new Post( postItem )