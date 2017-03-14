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

const SALARY_RANGES = {
  1: 'Menor o igual a $100.000',
  2: '$100.000 - $150.000',
  3: '$150.001 - $210.000',
  4: '$210.001 - $300.000',
  5: '$300.001 - $426.000',
  6: '$426.001 - $550.000',
  7: '$550.001 - $625.000',
  8: '$625.001 - $852.000',
  9: '$852.001 - $1.025.000',
  10: '$1.052.001 - $1.252.000',
  11: '$1.252.001 - $.1500.000',
  12: '$1.500.00 o más'
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
      monthlySalary: SALARY_RANGES[+$('#monthlySalary').val()],
      monthlySavings: SALARY_RANGES[+$('#monthlySavings').val()],
      monthlyPayments: SALARY_RANGES[+$('#monthlyPayments').val()],
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
      message: String
    })

    console.log(message)
    _.each(message, (value, key) => {
      if (_.isEmpty(value)) {
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
