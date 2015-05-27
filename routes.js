var afterAction = function() {
  if (!Meteor.isClient) {
    return;
  }
  ga('send', 'pageview');
  SEO.set({
    title: orion.dictionary.get('seoTitle'),
    link: {
      icon: orion.dictionary.get('seoFavIcon.url'),
    },
    meta: {
      'description': orion.dictionary.get('seoDescription')
    },
    og: {
      'title': orion.dictionary.get('seoTitle'),
      'description': orion.dictionary.get('seoDescription'),
      'image': orion.dictionary.get('seoImage.url')
    }
  });
};

Router.route('/', {
	name: 'home',
	layoutTemplate: 'layout',
  onAfterAction: afterAction
});

Router.route('/equipo', {
  name: 'team',
  layoutTemplate: 'layout',
  onAfterAction: afterAction
});

Router.route('/clientes', {
  name: 'clients',
  layoutTemplate: 'layout',
  onAfterAction: afterAction
});

Router.route('/api/enterprises', function() {
  var enterprises = orion.entities.enterprises.collection.find().fetch();
  var json = JSON.stringify(enterprises, null, 2);

  this.response.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  this.response.end(json);
}, { where: 'server' });