import { Template } from 'meteor/templating'
import { $ } from 'meteor/jquery'

Template.prensa.onRendered(function () {
  $('.parallax').parallax()
  document.title = 'Venture Capital - Prensa'
})
