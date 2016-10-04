var robert = Meteor.users.findOne({_id: 'eyCfSHPdZgvkQWzsP'});
Roles.addUserToRoles( robert._id ,  ['admin'] );
