// import React from 'react'
import './Blog.css';
import BlogCategories from './BlogCategories.jsx';
import BlogsContainer from './BlogsContainer.jsx';
import Footer from '../footer/footer.jsx';

const Blog = () => {
  return (
    <>
    <div className="BlogSection">
      <div className="leftSection">
        <BlogCategories />
      </div>
      <div className="rightSection">
        <BlogsContainer />
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Blog;
