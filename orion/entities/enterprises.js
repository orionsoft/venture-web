Enterprises = new orion.collection('enterprises', {
  icon: 'suitcase',
  sidebarName: 'Enterprises',
  pluralName: 'Enterprises',
  singularName: 'Enterprise',
  tabular: {
    columns: [
      { data: 'title', title: 'Title' },
      { data: 'pledged', title: 'Pledged' },
      { data: 'funded', title: 'Funded' },
      { data: 'position', title: 'Posición' }
    ]
  }
})

Enterprises.attachSchema(new SimpleSchema({
  patformId: {
    type: String
  },
  title: {
    type: String
  },
  subtitle: {
    type: String
  },
  location: {
    type: String
  },
  image: orion.attribute('file', {
    label: 'Image',
    optional: true
  }),
  youtubeVideoCode: {
    type: String,
    optional: true
  },
  pledged: {
    type: Number,
    optional: true
  },
  funded: {
    type: Number,
    optional: true
  },
  dueDate: {
    type: Date,
    optional: true
  },
  info: {
    type: [Object]
  },
  'info.$.label': {
    type: String
  },
  'info.$.val': {
    type: String,
    label: 'Value'
  },
  moreInfoLink: {
    type: String,
    label: 'More Info Link',
    optional: true
  },
  position: {
    type: Number,
    label: 'Posición',
    optional: true
  }
}))
