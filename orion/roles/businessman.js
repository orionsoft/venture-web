const Businessman = new Roles.Role('businessman')

/**
 * Allow the actions of the collection
 */
Businessman.allow('collections.clients.index', true) // Allows the role to see the link in the sidebar
Businessman.allow('collections.clients.insert', true) // Allows the role to insert documents
Businessman.allow('collections.clients.update', true) // Allows the role to update documents
Businessman.allow('collections.clients.remove', true) // Allows the role to remove documents
Businessman.allow('collections.clients.showCreate', true) // Makes the "create" button visible
Businessman.allow('collections.clients.showUpdate', true) // Allows the user to go to the update view
Businessman.allow('collections.clients.showRemove', true) // Shows the delete button on the update view

Businessman.helper('collections.clients.indexFilter', {}) // Allows the role to se all documents
