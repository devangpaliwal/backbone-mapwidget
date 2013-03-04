app.views.MapView = Backbone.View.extend({
	templateSelector:"#mapTemplate",
	id:"mapContainer",
	size:'640',
	initialize:function(obj){
		this.places = obj.places;
		
		
	},
	render:function(){
		var html = _.template($("#mapTemplate").html(),this.places);
		this.$el.append(html);
		var imgElem=this.$el.find("img.map");
		if(!this.places.length) {imgElem.attr("src","data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D");return;}
		this._showLoader();
		imgElem.bind("load",_.bind(function(event){ this._hideLoader(); }, this));
		imgElem.attr("src",this._getMapUrl(this.places));
	},
	_getMapUrl:function(objArray){
        var url = "http://maps.googleapis.com/maps/api/staticmap?sensor=false&scale=2&maptype=roadmap&size="+this.size+"x"+this.size+"&";
                var len = objArray.length;
                var charCount=65;
                for(var i=0;i<len;i++){
                        url += "markers=color:orange%7Clabel:"+String.fromCharCode(charCount)+ '%7C' + objArray[i].latitude + ',' + objArray[i].longitude + '&';
                        charCount++;
                }
                var style = "style=feature:water%7Celement:all%7Chue:0xa1bdc4%7Csaturation:-49%7Clightness:-8%7Cvisibility:on&";
                style += "style=feature:landscape%7Celement:all%7Chue:0xd9dac9%7Csaturation:-31%7Clightness:-8%7Cvisibility:on&";
                style += "style=feature:road.highway%7Celement:all%7Chue:0xbfbcb5%7Csaturation:-93%7Clightness:25%7Cvisibility:on&";
                style += "style=feature:road.arterial%7Celement:all%7Chue:0xbfbcb5%7Csaturation:-93%7Clightness:-5%7Cvisibility:on&";
                style += "style=feature:poi.park%7Celement:all%7Chue:0xc2debd%7Csaturation:-22%7Clightness:12%7Cvisibility:on";
                url += style;
        return url;
    },
    _showLoader:function(){
           this.$el.find(".mapLoader").fadeIn(300);
    },
    _hideLoader:function(){
        this.$el.find(".mapLoader").fadeOut(300);
    }

});