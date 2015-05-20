orion.addEntity('logos', {
    name: {
        type: String,
        label: "Name"
    },
    url: {
        type: String,
        label: "Url"
    },
    image: orion.attribute('file', {
        label: 'Logo'
    })
}, {
    icon: 'file-photo-o',
    sidebarName: 'Logos',
    pluralName: 'Logos',
    singularName: 'Logo',
    tableColumns: [
        { data:'name', title: 'Name' },
        orion.attributeColumn('file', 'image', 'Image'),
    ]
});