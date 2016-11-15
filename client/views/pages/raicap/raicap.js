import { Template } from 'meteor/templating'
import { $ } from 'meteor/jquery'


Template.raicap.onRendered(function () {
  $('.parallax').parallax()
  $('select').material_select()
})


