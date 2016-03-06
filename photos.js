
(function() {

    var apiURL = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=88b38fa938012279362204219265a900&photoset_id=72157664952757730&user_id=139085922%40N04&per_page=20&page=1&format=json&jsoncallback=?";

    $.getJSON(apiURL, function(data){

        $.each(data.photoset.photo, function(i,photo){

        	var img_src = "http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_" + "m.jpg";

        	var a_href = "http://www.flickr.com/photos/" + data.photoset.owner + "/" + photo.id + "/";

        	/*
			adds a part to html body:

			<div class="imgthingie" id="i">
				<img src="img_src" />
			</div>

			for every image.
        	*/

        	$( "<div class=\"imgthingie\" id=\"" + i + "\">" ).appendTo( "#images")
        	$("<img/>").attr("src", img_src).appendTo("#"+i)
        	$( "</div>").appendTo("#images")


        	//WRAP IN LINK
        	.wrap(("<a href='" + a_href + "'></a>"))
      	});

    });
})();
