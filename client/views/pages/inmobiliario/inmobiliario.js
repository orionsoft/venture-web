import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'
import { $ } from 'meteor/jquery'
import { Materialize } from 'meteor/materialize:materialize'
import { check } from 'meteor/check'
import _ from 'underscore'

Template.inmobiliario.onRendered(function () {
  $('.parallax').parallax()
  $('select').material_select()
  document.title = 'Venture Capital - Contacto Inmobiliario'
})

Template.inmobiliarioBlog.onRendered(function () {
  $('.parallax').parallax()
  document.title = 'Venture Capital - Blog Inmobiliario'
  this.subscribe('Articles')
})

Template.inmobiliarioBlog.helpers({
  articles: function () {
    return Articles.find({}, {sort: {createdAt: -1}}).fetch()
  }
})

const MONEY_RANGES = {
  1: 'Menor o igual a $100.000',
  2: '$100.000 - $300.000',
  3: '$300.000 - $500.000',
  4: '$500.000 - $700.000',
  5: '$700.000 - $900.000',
  6: '$900.000 - $1.100.000',
  7: '$1.100.000 - $1.300.000',
  8: '$1.300.000 - $1.500.000',
  9: '$1.500.000 - $1.700.000',
  10: '$1.700.000 - $1.900.000',
  11: '$1.900.000 - $2.100.000',
  12: '$2.100.000 - $2.300.000',
  13: '$2.300.000 - $2.500.000',
  14: '$2.500.000 - $2.700.000',
  15: '$2.700.000 - $2.900.000',
  16: '$2.900.000 - $3.100.000',
  17: '$3.100.000 o más'
}

const HIGHER_RANGES = {
  1: '$500.000 - $800.000',
  2: '$800.000 - $1.100.000',
  3: '$1.100.000 - $1.400.000',
  4: '$1.400.000 - $1.700.000',
  5: '$1.700.000 - $2.000.000',
  6: '$2.000.000 - $2.300.000',
  7: '$2.300.000 - $2.500.000',
  8: '$2.500.000 - $2.800.000',
  9: '$2.800.000 - $3.100.000',
  10: '$3.100.000 - $3.400.000',
  11: '$3.400.000 - $3.700.000',
  12: '$3.700.000 - $4.000.000',
  13: '$4.000.000 - $4.300.000',
  14: '$4.300.000 o más'
}

Template.inmobiliario.events({
  'submit form': (e) => {
    e.preventDefault()
    var captchaData = grecaptcha.getResponse();
    var message = {
      names: $('#names').val(),
      lastName: $('#lastName').val(),
      email: $('#email').val(),
      phone: $('#phone').val(),
      rut: $('#rut').val(),
      monthlySalary: HIGHER_RANGES[+$('#monthlySalary').val()],
      monthlySavings: MONEY_RANGES[+$('#monthlySavings').val()],
      monthlyPayments: MONEY_RANGES[+$('#monthlyPayments').val()],
      message: $('#message').val()
    }
    check(message, {
      names: String,
      lastName: String,
      email: String,
      phone: String,
      monthlySalary: String,
      monthlySavings: String,
      monthlyPayments: String,
      message: String,
      rut: String
    })

    console.log(message)
    _.each(message, (value, key) => {
      if (_.isEmpty(value) && key !== 'message') {
        Materialize.toast('Hay campos del formulario sin rellenar.', 4000)
        return false
      }
    })

    var captchaData = grecaptcha.getResponse()
    console.log(message, captchaData)
    if (captchaData) {
      Meteor.call('contact.sendEmail', message, captchaData, 'david@venturecapital.cl', (error) => {
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
