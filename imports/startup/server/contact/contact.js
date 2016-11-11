import {Meteor} from 'meteor/meteor'
import { Email } from 'meteor/email'

Meteor.methods({
	'contact.sendEmail'(data){
		console.log(data)
		console.log('sent')

    this.unblock();
    Email.send({
      to: data.email,
      from: 'me@venture.com',
      subject: `Email de contacto, motivo: ${data.motivo}`,
      text: `Nombre: ${data.first_name}\nMotivo:${data.motivo}\nMensaje:${data.message}`
    });


	}
})