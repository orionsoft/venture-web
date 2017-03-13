import { Meteor } from 'meteor/meteor'

Meteor.publish('enterprises', function () {
  return Enterprises.find({})
})

Meteor.publish('teams', function () {
  return Teams.find({})
})
