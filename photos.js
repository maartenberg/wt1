var pagenr;
var maxpages;

function photos() {

    var apiURL = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=88b38fa938012279362204219265a900&photoset_id=72157664952757730&user_id=139085922%40N04&per_page=12&format=json&jsoncallback=?&page="+pagenr;

    $.getJSON(apiURL, function(data){

        $.each(data.photoset.photo, function(i,photo){

        	var img_src = "http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_" + "m.jpg";

        	var a_href = "http://www.flickr.com/photos/" + data.photoset.owner + "/" + photo.id + "/";

        	maxpages = data.photoset.pages;

        	/*
			adds a part to html body in div with id="images":

			<div class="imgthingie" id="i">
				<img src="img_src" />
			</div>

			for every image.
        	*/
        	
        	$( "<div class=\"imgthingie\" id=\"" + i + "\"> " ).appendTo( "#images" ).wrap(("<a href='" + a_href + "'></a>" ))
        	$( "<img/>" ).attr( "src", img_src ).appendTo( "#"+i )
        	$( "</div>" ).appendTo( "#images" )

        	//WRAP IN LINK

      	});

    });
}

function clickedNext() {

	if (pagenr < maxpages) {
		$(".images").empty();
		pagenr++;
		photos(pagenr);
	}
}

function clickedPrev() {
	if (pagenr > 1) {
		$(".images").empty();
		pagenr--;
		photos();
	}
}

function start() {
	pagenr = 1;
	photos();
}

start();