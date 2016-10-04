import { Meteor } from 'meteor/meteor'

Meteor.publish('enterprises', function () {
  return Enterprises.find({})
})
