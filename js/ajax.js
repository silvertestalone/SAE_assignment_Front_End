$(document).ready(function(){
$.ajax({
	type: "GET",
	dataType:"json",
	url: "js/blog.json",
	success: function(podaci){
		var ispis = "";
		$.each(podaci, function(index, podatak){
			ispis +="<div class=\"card\"><div class=\"cardImg\"><img src=\"" + podatak.url + "\" alt=\"" + podatak.alt + "\"/></div><div class=\"date\">" + podatak.date + "</div><div class=\"title\"><a href=\"#\">" + podatak.title + "</a></div><div class=\"textContent\"><p>" + podatak.text + "</p></div></div>";
		});
		$("#mainWrapper").html(ispis);
	}
});
})
