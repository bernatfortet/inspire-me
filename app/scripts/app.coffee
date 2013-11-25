class @Inspire

	servicesMeta:
		tumblr:
			username: ''
			apiKey: '4hPGtIdhWb99U54h5W97Rl2EhsPwONJbTk1DTisckc5aLIeWMk'
		behance:
			username: ''
			apiKey: 'hrRjg1hdm9LxrGOnNKz5wznOlJ1eVLdi'
		dribbble:
			username: ''

	posts: null

	wall: null

	constructor: ->

	init: ->
		#inspire = this

		this.servicesMeta.tumblr.username = 'bernatfortet.tumblr.com'
		this.servicesMeta.behance.username = 'bernatfortet'
		this.servicesMeta.dribbble.username = 'bernatfortet'

		this.behance 	= new Behance( this.servicesMeta.behance )	
		this.tumblr 	= new Tumblr( this.servicesMeta.tumblr )
		this.dribbble 	= new Dribbble( this.servicesMeta.dribbble )	

		this.wall = $('#Wall')

		this.wall.masonry
			columnWidth: this.getPostWidth()
			gutter: 0
			itemSelector: '.Post'

		this.wall.masonry('unbindResize')
		$(window).resize( this.onResize )

	onResize: =>
		this.wall.masonry
			columnWidth: this.getPostWidth()
			gutter: 0
			itemSelector: '.Post'

		$('.Post').each (post) ->
			#console.log this, post
			$(this).height( inspire.getPostWidth )
			
 			#console.log $( this ).outerWidth()

		
	getPostWidth: ->
		columnsNumber = Math.round( $('body').width() / 200 )
		postWidth = $('body').outerWidth() / columnsNumber


class @Post
	templateName: 'Post'

	item:
		post_url: null
		low_res_image_url: null
		image_url: null
		source: null


	constructor: ( item ) ->
		this.item = item
		this.add()

	add: () ->
		renderedPost = this.render()

		inspire.wall.append( renderedPost )
		appendedPost = inspire.wall.children().last()

		appendedPost.width( inspire.getPostWidth )
		appendedPost.height( inspire.getPostWidth )

		inspire.wall.masonry( 'appended', renderedPost )

	render: ->
		templateSource = $('#'+this.templateName ).html();
		template = Handlebars.compile(templateSource);
		renderedTemplate = template( this.item )
		$(renderedTemplate)


class ImagePost
	image_url: ''

	constructor: ->


	
