import '../seo'
import './contact/contact'
import '../orionjs'

Meteor.publish('Teams', function tasksPublication () {
  return Teams.find()
})

Meteor.publish('Posts', function tasksPublication () {
  return Posts.find()
})

Meteor.publish('Articles', function tasksPublication () {
  return Articles.find()
})

process.env.MAIL_URL = 'smtp://AKIAIPCCALM47GMK7HNQ:AgPVMITLMu%2FEZexFDKSk6DKY71pJxOnmnnKMU9ffGdb0@email-smtp.us-east-1.amazonaws.com:465'
Meteor.startup(function () {
  reCAPTCHA.config({
    privatekey: '6LcfsQwUAAAAAP-9UqlVNR__KBk7XbdcS5IwQun0'
  })
})
