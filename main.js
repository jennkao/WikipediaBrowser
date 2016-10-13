$(document).ready(function() {

	$("#submit").on("click", function() {
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
			console.log(data);
		}

	});

});
