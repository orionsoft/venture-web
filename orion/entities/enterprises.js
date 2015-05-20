orion.addEntity('enterprises', {
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
    "info.$.label": {
        type: String
    },
    "info.$.val": {
        type: String,
        label: "Value"
    },
    moreInfoLink: {
        type: String,
        label: "More Info Link"
    },
}, {
    icon: 'suitcase',
    sidebarName: 'Enterprises',
    pluralName: 'Enterprises',
    singularName: 'Enterprise',
    tableColumns: [
        { data:'title', title: 'Title' },
        { data:'pledged', title: 'Pledged' },
        { data:'funded', title: 'Funded' },
    ]
});