function getReferences() {

	/*
	Each link to an external site in the text needs to look like this:
	<sup><a class="ref" href="#fn-[somethingaboutref]" id="ref-[same somethingaboutref]" data-description="[Link text in ref's]" data-external="[external link]">[tekst]</a></sup>
	*/

	$.each(".ref", function(i, ref){
		$.( "<li id=\"" + ref.href + "\"> <a href=\"" + ref.data-external + "\">" + ref.data-description + "</a> <a href=\"" + ref.id + "\"" + &#8617; + "</a> </li>" ).appendTo("#references");
	});

}

getReferences();