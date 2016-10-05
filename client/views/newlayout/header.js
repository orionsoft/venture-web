import { Session } from 'meteor/session'
import { Template } from 'meteor/templating'

Session.set('menu', 'hidden')
Session.set('animation')

Template.newheader.events({
  'click .menuBtn' (event) {
    Session.set('menu', 'visible')
    Session.set('animation', 'slideInDown')
    console.log(Session.get('menu'))
  }
})
