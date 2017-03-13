import { Template } from 'meteor/templating'
import { $ } from 'meteor/jquery'

Template.nosotros.onRendered(function () {
  $('.parallax').parallax()
  $('select').material_select()
  this.subscribe('Teams')
  document.title = 'Venture Capital - Nosotros'
})

Template.nosotros.helpers({
  managers: function () {
    return Teams.find({manager: true}, { sort: { index: 1 } }).fetch()
  },
  team: function() {
    return Teams.find({ $or: [{manager: false}, {manager: null}] }, { sort: { index: 1 } }).fetch()
  }
})
