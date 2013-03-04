app.views.PlaceView = Backbone.View.extend({
	templateSelector:"#placeTemplate",
	id:"placeContainer",
	tagName:'ul',
	initialize:function(obj){
		this.places = obj.places;
	},
	render:function(){
		var html = _.template($("#placeTemplate").html(),{"places":this.places});
		console.log(html);
		this.$el.append(html);
	}

});