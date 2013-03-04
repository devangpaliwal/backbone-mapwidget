app.views.AppView = Backbone.View.extend({

	initialize:function(obj){
		this.places = obj.places;
		this.mapView = new app.views.MapView({"places":this.places}); 
		this.placeView = new app.views.PlaceView({"places":this.places});
	},
	render:function(){
		this.$el.append(this.mapView.$el);
		this.mapView.render();
		this.$el.append(this.placeView.$el);
		this.placeView.render();
	}

});