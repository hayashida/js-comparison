var Nightmare = require('nightmare');

describe('Test Rendering', function() {
	this.timeout(60000);

	it('react rendering', function(done) {
		new Nightmare()
			.goto('http://localhost:3000/react.html')
			.wait('.item-code')
			.end()
			.then(function(link) {
				done();
			})
			.catch(function(err) {
				console.log(err);
			});
	});

	it('vue.js rendering', function(done) {
		new Nightmare()
			.goto('http://localhost:3000/vue.html')
			.wait('.item-code')
			.end()
			.then(function(link) {
				done();
			})
			.catch(function(err) {
				console.log(err);
			});
	});

	it('riot rendering', function(done) {
		new Nightmare()
			.goto('http://localhost:3000/riot.html')
			.wait('.item-code')
			.end()
			.then(function(link) {
				done();
			})
			.catch(function(err) {
				console.log(err);
			});
	});
});