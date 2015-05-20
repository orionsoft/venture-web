orion.pages.addTemplate({
    template: 'pagesSimple', 
    layout: 'layout',
    name: 'Simple',
    description: 'Simple template',
}, {
	section: {
		type: String,
		label: "Section",
		autoform: {
			options: function() {
				return [{label: "Nosotros", value: "1"},
		        {label: "Ayuda", value: "2"},
		        {label: "Emprende", value: "3"},
		        {label: "Invierte", value: "4"}]
			}
		}
	},
	position: {
		type: Number
	},
    content: orion.attribute('froala', {
      label: 'Content'
    })
})