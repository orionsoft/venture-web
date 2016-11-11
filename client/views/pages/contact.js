import { Template } from 'meteor/templating'
import { $ } from 'meteor/jquery'


Template.contact.onRendered(function () {
  $('.parallax').parallax()
  $('select').material_select()
})

Template.contact.events({
	'submit form': (e)=>{
		message={
			first_name:$('#first_name').val(),
			email:$('#email').val(),
			motivo:$('#motivo').val(),
			message:$('#message').val(),
		}
		console.log(message)
		e.preventDefault()
		Meteor.call('contact.sendEmail',message,()=>{
			e.target.reset()
			Materialize.toast('Mensaje recibido, gracias por contactarnos.', 4000) 

		})
	}
})