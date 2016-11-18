Teams = new orion.collection('team', {
  icon: 'suitcase',
  sidebarName: 'Team',
  pluralName: 'Team Persons',
  singularName: 'Team Person',
  tabular: {
    columns: [
      { data: 'name', title: 'Name' },
      { data: 'index', title: 'Index' }
    ]
  }
})

Teams.attachSchema(new SimpleSchema({
  index: {
    type: Number,
    label: 'Index'
  },
  name: {
    type: String,
    label: 'Name'
  },
  role: {
    type: String,
    label: 'Role'
  },
  email: {
    type: String,
    label: 'email',
    optional: true
  },
  linkedin: {
    type: String,
    label: 'linkedin',
    optional: true
  },
  twitter: {
    type: String,
    label: 'twitter',
    optional: true
  },
  image: orion.attribute('file', {
    label: 'Image'
  }),
  'manager': {
    type: Boolean,
    label: 'Director',
    optional: true
  }
}))
