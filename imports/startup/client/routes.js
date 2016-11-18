import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'

FlowRouter.route('/', {
  name: 'index',
  action: function () {
    BlazeLayout.render('newlayout', {content: 'newhome'})
  }
})

FlowRouter.route('/capital-de-riesgo/raicap', {
  name: 'raicap',
  action: function () {
    BlazeLayout.render('newlayout', {content: 'raicap'})
  }
})
FlowRouter.route('/capital-de-riesgo/red-angel', {
  name: 'angel',
  action: function () {
    BlazeLayout.render('newlayout', {content: 'angel'})
  }
})

FlowRouter.route('/intermediacion', {
  name: 'intermediacion',
  action: function () {
    BlazeLayout.render('newlayout', {content: 'intermediacion'})
  }
})

FlowRouter.route('/nosotros', {
  name: 'nosotros',
  action: function () {
    BlazeLayout.render('newlayout', {content: 'nosotros'})
  }
})

FlowRouter.route('/saeco', {
  name: 'saeco',
  action: function () {
    BlazeLayout.render('newlayout', {content: 'saeco'})
  }
})

FlowRouter.route('/contact', {
  name: 'contact',
  action: function () {
    BlazeLayout.render('newlayout', {content: 'contact'})
  }
})
