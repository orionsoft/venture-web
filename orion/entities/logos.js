Logos = new orion.collection('logos', {
  icon: 'file-photo-o',
  sidebarName: 'Logos',
  pluralName: 'Logos',
  singularName: 'Logo',
  tabular: {
    columns: [
      { data: 'name', title: 'Name' },
      orion.attributeColumn('file', 'image', 'Image')
    ]
  }
})

Logos.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: 'Name'
  },
  url: {
    type: String,
    label: 'Url'
  },
  image: orion.attribute('file', {
    label: 'Logo'
  })
}))
