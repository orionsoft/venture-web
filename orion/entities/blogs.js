Blogs = new orion.collection('Blogs', {
  icon: 'post',
  sidebarName: 'Blog',
  pluralName: 'Blogs',
  singularName: 'Blog',
  link: {
    // *
    //  * The text that you want to show in the sidebar.
    //  * The default value is the name of the collection, so
    //  * in this case it is not necessary.

    title: 'Blogs'
  },
  tabular: {
    columns: [{data: 'title', title: 'Title'}, {data: 'url', title: 'Url'}]
  }
})

Blogs.attachSchema(
  new SimpleSchema({
    title: {
      type: String,
      label: 'Title'
    },
    url: {
      type: String,
      label: 'Url'
    },
    content: {
      type: String,
      label: 'Content'
    },
    createdAt: orion.attribute('createdAt'),
    image: orion.attribute('file', {
      label: 'Image',
      optional: true
    })
  })
)
