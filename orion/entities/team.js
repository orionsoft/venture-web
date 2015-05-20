orion.addEntity('team', {
    index: {
        type: Number,
        label: 'Index'
    },
    name: {
        type: String,
        label: "Name"
    },
    role: {
        type: String,
        label: "Role"
    },
    email: {
        type: String,
        label: "email"
    },
    image: orion.attribute('file', {
        label: 'Image'
    }),
}, {
    icon: 'suitcase',
    sidebarName: 'Team',
    pluralName: 'Team Persons',
    singularName: 'Team Person',
    tableColumns: [
        { data:'name', title: 'Name' },
{ data:'index', title: 'Index' },
    ]
});