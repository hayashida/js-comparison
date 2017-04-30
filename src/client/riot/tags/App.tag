<App>
	<div class="container">
		<h1>Riot</h1>
		<table>
			<thead>
				<tr>
					<th>Code</th>
					<th>Name</th>
				</tr>
			</thead>
			<tbody>
				<tr each={ item in people }>
					<td class="item-code"><MyInput type="number" defaultvalue={ item.code } /></td>
					<td class="item-name"><MyInput type="string" defaultvalue={ item.name } /></td>
				</tr>
			</tbody>
		</table>
	</div>

	<script>
		const request = require('superagent');

		this.people = [];

		this.on('before-mount', () => {
			request.get('data.json', (err, res) => {
				this.people = res.body;
				this.update();
			});
		});
	</script>
</App>