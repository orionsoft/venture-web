import { Template } from 'meteor/templating'
import { $ } from 'meteor/jquery'

Template.angel.onRendered(function () {
  $('.parallax').parallax()
  $('select').material_select()
  $('#inversionista').on('click', '.main-container', function (argument) {
    console.log('se clickeo')
  })
})
Template.angel.events({
  'click #inversionistas': (event) => {
    console.log('click')
    FlowRouter.go('contact', null, {motivo: 'inversionistas'})
  }
})
