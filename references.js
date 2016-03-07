
$(document).ready(function() {
	$("#references").append("<ol id=\"footnotes\"></ol>");
	footnote = 1;
	$("a[title]").addClass("footnote");
	$(".footnote").each(function() {
		var id = 'note' + footnote;
		$(this).attr('id', id);
		$(this).append("<sup>"+footnote+"</sup>");
		cite="<li>";
		url=$(this).attr("data-external");
		title=$(this).attr("title");

		
			cite+="<a href=\""+url+"\">"+title+"</a>";
			cite+="<a href=\"#"+id+"\">&#8617;</a>";
		

		cite+="</li>";
		$("#footnotes").append(cite);
		footnote++;
	});
});