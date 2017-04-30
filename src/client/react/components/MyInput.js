import React, { Component } from 'react'

export default class MyInput extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { type, value } = this.props;
		let input;
		switch (type) {
			case 'number':
				input = <input type="number" name="" id="" defaultValue={ value } />
				break;
			case 'string':
				input = <input type="text" name="" id="" defaultValue={ value } />
				break;
		}

		return input;
	}
}
