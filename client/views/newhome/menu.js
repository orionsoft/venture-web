import { Session } from 'meteor/session'
import { Template } from 'meteor/templating'

Template.menu.helpers({
  display () {
    return Session.get('menu')
  },
  animation () {
    return Session.get('animation')
  }
})
