Clients = new orion.collection('clients', {
  icon: 'users',
  sidebarName: 'Clients',
  pluralName: 'Clients',
  singularName: 'Client',
  link: {
   // *
   //  * The text that you want to show in the sidebar.
   //  * The default value is the name of the collection, so
   //  * in this case it is not necessary.

    title: 'Clients'
  },
  tabular: {
    columns: [
      { data: 'name', title: 'Name' },
      { data: 'index', title: 'Index' }
    ]
  }
})

Clients.attachSchema(new SimpleSchema({
  index: {
    type: Number,
    label: 'Index'
  },
  name: {
    type: String,
    label: 'Name'
  },
  description: {
    type: String,
    label: 'description'
  },
  web: {
    type: String,
    label: 'Web'
  },
  image: orion.attribute('file', {
      label: 'Image',
      optional: true
  })
}))
