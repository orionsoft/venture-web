import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { $ } from 'meteor/jquery'
import { Materialize } from 'meteor/materialize:materialize'
import { check } from 'meteor/check'
import _ from 'underscore'

Template.contact.onRendered(function () {
  $('.parallax').parallax()
  $('select').material_select()
  document.title = 'Venture Capital - Contacto'
})

Template.contact.helpers({
  investorSelected: () => {
    return FlowRouter.current().queryParams.motivo === 'inversionistas' ? 'selected' : ''
  }
})

Template.contact.events({
  'submit form': (e) => {
    e.preventDefault()
    var captchaData = grecaptcha.getResponse();

    var message = {
      first_name: $('#first_name').val(),
      email: $('#email').val(),
      motivo: $('#motivo').val(),
      message: $('#message').val()
    }
    check(message, {
      first_name: String,
      email: String,
      motivo: String,
      message: String
    })
    var empty = false
    _.each(message, (value, key) => {
      if (_.isEmpty(value)) {
        empty = true
        return false
      }
    })
    if (empty) {
      Materialize.toast('Hay campos del formulario sin rellenar.', 4000)
      return false
    }

    var captchaData = grecaptcha.getResponse()
    console.log(message, captchaData)
    if (captchaData) {
      Meteor.call('contact.sendEmail', message, captchaData, false, (error) => {
        if (error) {
          console.log('There was an error: ' + error.reason)
          Materialize.toast('Mensaje no enviado, '+error.reason, 4000)
        } else {
          console.log('Success!')
          grecaptcha.reset()
          Materialize.toast('Mensaje recibido, gracias por contactarnos.', 4000)
          e.target.reset()
        }
      })
    } else {
      Materialize.toast('Debe comprobar el recaptcha', 4000)
    }
  }
})
