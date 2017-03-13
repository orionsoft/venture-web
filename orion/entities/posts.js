Posts = new orion.collection('Posts', {
  icon: 'post',
  sidebarName: 'Prensa',
  pluralName: 'Posts',
  singularName: 'Post',
  link: {
   // *
   //  * The text that you want to show in the sidebar.
   //  * The default value is the name of the collection, so
   //  * in this case it is not necessary.

    title: 'Posts'
  },
  tabular: {
    columns: [
      { data: 'title', title: 'Title' },
      { data: 'url', title: 'Url' }
    ]
  }
})

Posts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Title'
  },
  url: {
    type: String,
    label: 'Url'
  },
  publisher: {
    type: String,
    label: 'publisher'
  },
  createdAt: orion.attribute('createdAt'),
  image: orion.attribute('file', {
    label: 'Image',
    optional: true
  })
}))
