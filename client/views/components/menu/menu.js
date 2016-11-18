import { Session } from 'meteor/session'
import { Template } from 'meteor/templating'

Template.menu.onRendered(function () {
  $('.collapsible').collapsible({accordion: false})
})

Template.menu.helpers({
  display() {
    return Session.get('menu')
  },
  animation() {
    return Session.get('animation')
  }
})

Template.menu.events({
  'click .closeBtn'(event) {
    Session.set('animation', 'slideOutUp')
  },
  'click .menu a': function (event) {
    Session.set('animation', 'slideOutUp')
  }
})
