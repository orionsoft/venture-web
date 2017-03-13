import { Template } from 'meteor/templating'
import { $ } from 'meteor/jquery'

Template.prensa.onRendered(function () {
  $('.parallax').parallax()
  document.title = 'Venture Capital - Prensa'
  this.subscribe('Posts')
})
Template.prensa.helpers({
  post: function () {
    return Posts.find({}, {sort: {createdAt: -1}}).fetch()
  }
})
