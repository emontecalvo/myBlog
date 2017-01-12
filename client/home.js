import React from 'react';
import {connect} from 'react-redux';
import NewBlog from './newBlog';
import PublishedBlogs from './publishedBlogs';


class Home extends React.Component {

	constructor() {
		super()
		this.state = {
			blogposts: [],
			showEdit: false,
		}
	}

	addBlog(title, content, tags) {
		console.log(title, content, tags);
		var newBlog = {
			title: title,
			content: content,
			tags: tags
		}
		this.state.blogposts.push(newBlog);
		return this.setState({blogposts: this.state.blogposts});
	}

	render() {

		return <div>
				<h1>my blog</h1>
				<NewBlog addBlog={this.addBlog.bind(this)}/>
				<PublishedBlogs blogs={this.state.blogposts} />
			</div>;

	}

}

module.exports = Home;