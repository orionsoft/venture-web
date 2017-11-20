import {Template} from 'meteor/templating'
import {$} from 'meteor/jquery'

Template.blog.onRendered(function() {
  $('.parallax').parallax()
  document.title = 'Venture Capital - Blog'
  this.subscribe('Blogs')
})
Template.blog.helpers({
  blog: function() {
    return Blogs.find({}, {sort: {createdAt: -1}}).fetch()
  }
})
