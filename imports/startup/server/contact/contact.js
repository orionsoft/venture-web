import {Meteor} from 'meteor/meteor'
import { Email } from 'meteor/email'

Meteor.methods({
  'contact.sendEmail' (data, captchaData, to) {
    console.log(data)

    this.unblock()
    var verifyCaptchaResponse = reCAPTCHA.verifyCaptcha(this.connection.clientAddress, captchaData)

    if (!verifyCaptchaResponse.success) {
      console.log('reCAPTCHA check failed!', verifyCaptchaResponse)
      throw new Meteor.Error(422, 'reCAPTCHA Failed: ' + verifyCaptchaResponse.error)
    } else {
      console.log('reCAPTCHA verification passed!')
      let text
      if (!data.motivo) {
        data.motivo = 'Formulario Inmobiliario'
        text = `Nombres: ${data.names}\nApellidos:${data.lastName}\nEmail: ${data.email}\nRenta Mensual Liquida:${data.monthlySalary}\nCapacidad de Ahorro Mensual: ${data.monthlySavings}\nCapacidad de Cuota Mensual: ${data.monthlyPayments}\nMensaje: ${data.message}`
      } else {
        text = `Nombre: ${data.first_name}\nMotivo:${data.motivo}\nEmail: ${data.email}\nMensaje:\n${data.message}`
      }
      Email.send({
        to: to || 'rod@orionsoft.io',
        from: 'info@venturecapital.cl',
        subject: `Email de contacto, motivo: ${data.motivo}`,
        text: text
      })
    }
    return true
  }
})
