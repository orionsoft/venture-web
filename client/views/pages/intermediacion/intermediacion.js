import { Template } from 'meteor/templating'
import { $ } from 'meteor/jquery'

Template.intermediacion.onRendered(function () {
  $('.parallax').parallax()
  $('select').material_select()
  document.title = 'Venture Capital - intermediación'
})
