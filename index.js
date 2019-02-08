const fetch = require('node-fetch');

const url = 'https://jetpay.com/wp-json/wp/v2/pages?&page=9';

fetch(url)
	.then(function(response) {
		return response.json();
	})
	.then(function(myJson) {
		const myArr = [];
		myJson.map((page) => {
			const myPage = {
				title: page.title.rendered,
				slug: page.slug,
				type: page.type,
				content: page.content.rendered
			};
			myArr;
		});
		console.log(JSON.stringify(myJson));
	});
