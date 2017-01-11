import React from 'react';
import {connect} from 'react-redux';


class Home extends React.Component {

	constructor() {
		super()
		this.state = {
			items: [],
			showEdit: false,
			wordToEdit: '',
		}
	}

	render() {

		return <div>
				<h1>my blog</h1>

			</div>;

	}

}

module.exports = Home;