import React, { Component } from 'react';
import { render } from 'react-dom';

import request from 'superagent';

import MyInput from './components/MyInput';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			people: []
		}
	}
	componentWillMount() {
		request.get('data.json')
			.end((err, res) => {
				this.setState({
					people: res.body
				});
			});
	}
	render() {
		const { people } = this.state;
		return (
			<div className="container">
				<h1>React</h1>
				<table>
					<thead>
						<tr>
							<th>Code</th>
							<th>Name</th>
						</tr>
					</thead>
					<tbody>
					{people.map((item, key) =>
						<tr key={ key }>
							<td className="item-code"><MyInput type="number" value={ item.code } /></td>
							<td className="item-name"><MyInput type="string" value={ item.name } /></td>
						</tr>
					)}
					</tbody>
				</table>
			</div>
		);
	}
}

render(<App />, document.querySelector('#app'));