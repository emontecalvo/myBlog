import React from 'react';


const publishedBlogs = ({blogs, removeBlogPost, editBlogStart}) => {

  return (
    <div className="all_blog_wrapper">
    <p className="prev_posts">previous blog posts:</p>
    <ul>
      {blogs.map((blog, index) => {
        return <div key={index}>
        <div className="single_blog_wrapper">
        		<li className="title">{blog.title}</li>
        			<ul>
		        		<li>{blog.content}</li>
		        		<li>{blog.tags}</li>
		        	</ul>
		        	<button className="edit" onClick={() => editBlogStart(blog)}>edit</button>
		        	<button className="remove" onClick={() => removeBlogPost(blog)}>remove</button>
            </div>
        </div>;
      })}
    </ul>
    </div>
  )

}

module.exports = publishedBlogs;
