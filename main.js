var app = app || {};
(function(){
	app.views={};
	app.init = function(){
		var places = [{
			"name":"Udaipur",
			"latitude":"24.5800",
			"longitude":"73.6800"
		},
		{
			"name":"Jaipur",
			"latitude":"26.9200",
			"longitude":"75.8200"
		},
		{
			"name":"New Delhi",
			"latitude":"28.6667",
			"longitude":"77.2167"
		},
		{
			"name":"Agra",
			"latitude":"27.1833",
			"longitude":"78.0167"
		},
		{
			"name":"Bikaner",
			"latitude":"28.0100",
			"longitude":"73.1900"
		},
		{
			"name":"Jodhpur",
			"latitude":"26.2900",
			"longitude":"73.0300"
		},
		{
			"name":"Ajmer",
			"latitude":"26.4441",
			"longitude":"74.6449"
		},
		{
			"name":"Kota",
			"latitude":"25.1800",
			"longitude":"75.8300"
		}]
		var appView = new app.views.AppView({"places":places});
		$("#backboneMapWidget").append(appView.$el);
		appView.render();	
	}
})();

$(document).ready(function(){
	app.init();
});