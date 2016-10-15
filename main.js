$(document).ready(function() {

	var searchbarPosition = "center";

	$("#submit").on("click", function() {
		$("#feed").html('');
		var searchTerm = document.getElementById("query").value;

		var request = "https://en.wikipedia.org/w/api.php/w/api.php" +
		"?action=query&format=json&list=search&utf8=1&origin=*&srsearch=" + 
		searchTerm; 

		$.ajax({
			headers: { 'Api-User-Agent': 'mailto:jennkao92@gmail.com'},
			url: request,
			dataType: "json", 
			success: successHandler,
			type: 'GET'
		});

		function successHandler(data) {
			var content = data.query.search;
			content.forEach(function(item) {
				var href = "https://en.wikipedia.org/wiki/" + item.title.replace(/\s/g, "_");
				var html = "<div class='entry'><a class='entryHeader' href=" + href + ">";
				html += item.title + "</a>";
				html += "<h3 class='snippetText'>" + item.snippet;
				html += "</h3></div>";
				$("#feed").append(html);
			});
		}

		if (searchbarPosition === "center") {
			$(".search").animate({
				"marginTop": "-=130px",
				"marginBottom": "-=110px"
			});
			searchbarPosition = "top";
		}
	});
});
