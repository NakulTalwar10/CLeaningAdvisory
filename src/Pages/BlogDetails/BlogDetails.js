import React from 'react';
import { useLocation } from 'react-router-dom';
import './BlogDetails.css';

const BlogDetails = () => {
  const location = useLocation();
  const { blog } = location.state || {};


  const formattedDate = new Date(blog.date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });

  return (
    <div className="blog-container container">
      <img className="blog-image" src={blog.image} alt={blog.title} />
      <div className="blog-content">
        <h1 className="blog-title">{blog.title}</h1>
        <h1 className="blog-heading">{blog.heading}</h1>
        <div className="flex justify-center my-4">
          <span className="blog-category mx-4 font-semibold text-[#8a54da] text-xl">{blog.category}</span> || 
          <span className="blog-date mx-4 font-semibold text-[#8a54da] text-xl">{formattedDate}</span>
        </div>
        <span className="blog-description">{blog.description}</span>
      </div>
    </div>
  );
};

export default BlogDetails;
