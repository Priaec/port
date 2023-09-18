// src/components/Blog.js
import React from 'react';

const Blog = () => {
  // Dummy data for blog posts
  const blogPosts = [
    {
      title: 'Sample Blog Post 1',
      content:
        'This is the content of the first blog post. You can replace it with your own text.',
    },
    {
      title: 'Sample Blog Post 2',
      content:
        'This is the content of the second blog post. You can replace it with your own text.',
    },
  ];

  return (
    <div className="container">
      <h2 className="my-4">Blog Posts</h2>
      {blogPosts.map((post, index) => (
        <div className="card my-2" key={index}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
