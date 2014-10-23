App = Ember.Application.create();

App.Router.map(function(){
	this.resource("person", {path: "/people/:people_id"});
	this.resource("editPerson", {path: "/people/:people_id/edit"});
});

App.ApplicationRoute = Ember.Route.extend({
	model: function() {
		return people;
	},

	actions: {
		createPerson: function() {
			var people = this.modelFor("application");
				var person = people.pushObject({
					id: people.length + 1
				});
				this.transitionTo("editPerson", person)
		}
	}
});


App.PeopleRoute = Ember.Route.extend({
	model: function(params){
		return people[params.people_id];
	}
});

App.EditPersonRoute = Ember.Route.extend({
	model: function(params){
		return people[params.people_id];
	},

	actions: {
		save: function(){
			var person=this.modelFor("editPerson");
			this.transitionTo("person", person);
		}
	}
});

var people = [
	{
		id: 1,
		first: "Steve",
		last: "Rogers",
		address: "309 6th Street",
		phone: "278-3095"
	},
	{
		id: 2,
		first: "Tony",
		last: "Stark",
		address: "398 X Street",
		phone: "275-4985"
	},
	{
		id: 3,
		first: "Bruce",
		last: "Banner",
		address: "2983 Washington Avenue",
		phone: "508-3895"
	}
];