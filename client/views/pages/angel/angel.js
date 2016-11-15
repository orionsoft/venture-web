import { Template } from 'meteor/templating'
import { $ } from 'meteor/jquery'


Template.angel.onRendered(function () {
  $('.parallax').parallax()
  $('select').material_select()
})


