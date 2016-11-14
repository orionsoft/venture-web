import '../seo'
import './contact/contact'
import '../orionjs'  



Meteor.publish('Teams', function tasksPublication() {
    return Teams.find();
  });