AutoForm.addHooks('orionMaterializeCollectionsCreateForm', {
  onSuccess: function () {
    Session.set('orion_autoformLoading', false)
    RouterLayer.go(this.collection.indexPath())
  }
})
AutoForm.addHooks('orionMaterializeCollectionsUpdateForm', {
  onSuccess: function () {
    Session.set('orion_autoformLoading', false)
    RouterLayer.go(this.collection.indexPath())
  }
})