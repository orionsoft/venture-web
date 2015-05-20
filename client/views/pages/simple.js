Template.pagesSimple.onRendered(function() {
	this.autorun(function() {
		Router.current();
		$('html, body').animate({ scrollTop: 0 });
	})
})