import { Template } from 'meteor/templating'
import { $ } from 'meteor/jquery'

Template.contact.onRendered(function () {
  $('.parallax').parallax()
  $('select').material_select()
})
