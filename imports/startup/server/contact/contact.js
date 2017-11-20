import {Meteor} from 'meteor/meteor'
import {Email} from 'meteor/email'

Meteor.methods({
  'contact.sendEmail'(data, captchaData, to) {
    this.unblock()
    var verifyCaptchaResponse = reCAPTCHA.verifyCaptcha(this.connection.clientAddress, captchaData)

    if (!verifyCaptchaResponse.success) {
      console.log('reCAPTCHA check failed!', verifyCaptchaResponse)
      throw new Meteor.Error(422, 'reCAPTCHA Failed: ' + verifyCaptchaResponse.error)
    } else {
      console.log('reCAPTCHA verification passed!')
      if (data.motivo) {
        SSR.compileTemplate('htmlEmail', Assets.getText('templates/template.html'))

        Email.send({
          to: to || 'willy@venturecapital.cl',
          from: 'info@venturecapital.cl',
          subject: `Email de contacto, motivo: ${data.motivo}`,
          html: SSR.render('htmlEmail', data)
        })
      } else {
        SSR.compileTemplate('htmlEmail', Assets.getText('templates/templateInmobiliario.html'))

        Email.send({
          to: to || 'willy@venturecapital.cl',
          from: 'info@venturecapital.cl',
          subject: `Email de contacto, motivo: ${data.motivo}`,
          html: SSR.render('htmlEmail', data)
        })
      }
    }
    return true
  }
})
