$(document).ready(function() {

	var searchbarPosition = "center";

	$("#submit").on("click", function() {
		$("#feed").html('');
		var searchTerm = document.getElementById("query").value;

		var request = "https://en.wikipedia.org/w/api.php/w/api.php" +
		"?action=query&format=json&list=search&utf8=1&origin=*&srsearch=" + 
		searchTerm; 

		$.ajax( {
			headers: { 'Api-User-Agent': 'mailto:jennkao92@gmail.com'},
			url: request,
			dataType: "json", 
			success: successHandler,
			type: 'GET'
		});

		function successHandler(data) {
			var content = data.query.search;
			content.forEach(function(item) {
				var html = "<div class='entry'><h2 class='entryHeader'>";
				html += item.title + "</h2>";
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
