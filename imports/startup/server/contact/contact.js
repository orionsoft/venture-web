import {Meteor} from 'meteor/meteor'
import { Email } from 'meteor/email'

Meteor.methods({
  'contact.sendEmail' (data, captchaData) {
    console.log(data)

    this.unblock()
    var verifyCaptchaResponse = reCAPTCHA.verifyCaptcha(this.connection.clientAddress, captchaData)

    if (!verifyCaptchaResponse.success) {
      console.log('reCAPTCHA check failed!', verifyCaptchaResponse)
      throw new Meteor.Error(422, 'reCAPTCHA Failed: ' + verifyCaptchaResponse.error)
    } else {
      console.log('reCAPTCHA verification passed!')
      Email.send({
        to: 'info@venturecapital.cl',
        from: 'info@venturecapital.cl',
        subject: `Email de contacto, motivo: ${data.motivo}`,
        text: `Nombre: ${data.first_name}\nMotivo:${data.motivo}\nEmail: ${data.email}\nMensaje:\n${data.message}`
      })
    }
    return true
  }
})
