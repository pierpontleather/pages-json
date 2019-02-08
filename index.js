const url = 'https://jetpay.com/wp-json/wp/v2/pages?&page=9';

fetch(url)
	.then(function(response) {
		return response.json();
	})
	.then(function(myJson) {
		console.log(JSON.stringify(myJson));
	});
