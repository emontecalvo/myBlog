import React from 'react';
import {connect} from 'react-redux';


const editBlogForm = ({blogToEdit, editBlogPost}) => {
  console.log(blogToEdit);

    return(
          <div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              let title = e.target.title.value
              let content = e.target.content.value
              let tags = e.target.tags.value
              editBlogPost(title, content, tags)
              e.target.title.value = ''
              e.target.content.value = ''
              e.target.tags.value = ''
            }}
          >

      <input type="text" placeholder={blogToEdit.title} name="title" />
      <textarea rows="4" cols="50" placeholder={blogToEdit.content} name="content" />
      <input type="text" placeholder={blogToEdit.tags} name="tags" />

    <button type="submit">
      Save Edit
    </button>
  </form>
      </div>
    )

}

module.exports = editBlogForm;
