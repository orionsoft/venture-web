Template.homeEnterprises.onCreated(function() {
	this.subscribe('entity', 'enterprises');
});

Template.homeEnterprises.helpers({
	enterprises: function () {
		var enterprises = orion.entities.enterprises.collection.find({}, { sort: { position: 1 } }).fetch();
		return _.filter(enterprises, function(value, key, list){
			if (!value.dueDate) {
				return true;
			}
			var daysLeft = moment(value.dueDate).diff(moment(), 'days');
			return daysLeft > 0;
		});
	}
});

Template.homeEnterprisesEnterprise.helpers({
	toCurrency: function(number) {
		return "$" + Number(number).toLocaleString('es');
	},
	getCompletedPercentage: function() {
		return (this.funded / this.pledged) * 100;
	},
	daysLeft: function() {
		var daysLeft = moment(this.dueDate).diff(moment(), 'days');
		if (daysLeft == 1) {
			return 'Queda ' + daysLeft + ' día';
		} else {
			return 'Quedan ' + daysLeft + ' días';
		}
	}
})
