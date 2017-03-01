Articles = new orion.collection('articles', {
  icon: 'posts',
  sidebarName: 'Articles',
  pluralName: 'Articles',
  singularName: 'Article',
  link: {
   // *
   //  * The text that you want to show in the sidebar.
   //  * The default value is the name of the collection, so
   //  * in this case it is not necessary.

    title: 'Articles'
  },
  tabular: {
    columns: [
      { data: 'title', title: 'Title' },
      { data: 'description', title: 'Description' }
    ]
  }
})

Articles.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Title'
  },
  description: {
    type: String,
    label: 'Description'
  },
  content: {
    type: String,
    label: 'Content'
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
