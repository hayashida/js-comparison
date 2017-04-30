<template>
	<div class="container">
		<h1>Vue</h1>
		<table>
			<thead>
				<tr>
					<th>Code</th>
					<th>Name</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in people">
					<td class="item-code"><my-input type="number" :defaultvalue="item.code" /></td>
					<td class="item-name"><my-input type="string" :defaultvalue="item.name" /></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import request from 'superagent';
	import MyInput from './MyInput';

	export default {
		data() {
			return {
				people: []
			}
		},
		components: { 'my-input': MyInput },
		beforeCreate() {
			request.get('data.json', (err, res) => {
				this.people = res.body;
			});
		}
	}
</script>