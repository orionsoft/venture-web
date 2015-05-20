orion.addEntity('clients', {
    index: {
        type: Number,
        label: 'Index'
    },
    name: {
        type: String,
        label: "Name"
    },
    description: {
        type: String,
        label: "description"
    },
    web: {
        type: String,
        label: "Web"
    },
    image: orion.attribute('file', {
        label: 'Image'
    }),
}, {
    icon: 'users',
    sidebarName: 'Clients',
    pluralName: 'Clients',
    singularName: 'Client',
    tableColumns: [
        { data:'name', title: 'Name' },
        { data:'index', title: 'Index' },
    ]
});