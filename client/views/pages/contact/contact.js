import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { $ } from 'meteor/jquery'
import { Materialize } from 'meteor/materialize:materialize'
import { check } from 'meteor/check'
import _ from 'underscore'

Template.contact.onRendered(function () {
  $('.parallax').parallax()
  $('select').material_select()
})

Template.contact.events({
  'submit form': (e) => {
    e.preventDefault()
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

    console.log(message)
    Meteor.call('contact.sendEmail', message, () => {
      e.target.reset()
      Materialize.toast('Mensaje recibido, gracias por contactarnos.', 4000)
    })
  }
})
