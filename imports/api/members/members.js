import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { orion } from 'meteor/orionjs:core'

var Members = new orion.collection('posts', {
  singularName: 'Miembro', // The name of one of these items
  pluralName: 'Miembros', // The name of more than one of these items
  title: 'Miembros', // The title in the index of the collection
  link: {
    title: 'Miembros'
  },
  tabular: {
    columns: [
      { data: 'index', title: 'Index' },
      { data: 'name', title: 'Nombre' }
    ]
  }
})

Members.attachSchema(new SimpleSchema({
  index: {
    type: Number,
    label: 'Index'
  },
  name: {
    type: String,
    label: 'Nombre'
  },
  role: {
    type: String,
    label: 'Role'
  },
  email: {
    type: String,
    label: 'Email'
  },
  image: orion.attribute('image', {
    label: 'Image',
    optional: true
  })
}))

export default Members
