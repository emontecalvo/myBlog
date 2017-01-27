import React from 'react';

// this is nothing more than a function
// it MUST be stateless

const newBlog = ({addBlog}) => {

		return(
			<div>
				<div className="form_container">
				    <form
				      onSubmit={(e) => {
				        e.preventDefault()
				        let title = e.target.title.value
				        let content = e.target.content.value
				        let tags = e.target.tags.value
				        addBlog(title, content, tags)
				        e.target.title.value = ''
				        e.target.content.value = ''
				        e.target.tags.value = ''
				      }}
				    >

				      <input type="text" placeholder="enter title" name="title" />
				      <textarea rows="4" cols="50" placeholder="enter content" name="content" />
				      <input type="text" placeholder="enter tags" name="tags" />

					  <button type="submit">
					      add blog
					  </button>
  					</form>
				</div>
			</div>
		)

}

module.exports = newBlog;