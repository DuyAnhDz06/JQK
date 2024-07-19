// import React from 'react'
import './BlogCard.css'

const BlogCard = () => {
  return (
      <div className="blogContainer">
        <div className="imageHolder"></div>
        <div className="blogInfo">
          <h3 className="blogTitle">Lorem ipsum dolor sit amet.</h3>
          <h4 className="blogSubtitle">Lorem, ipsum dolor. <span className="blogDate">22/02/2023</span></h4>
          <p className="blogContent">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit inventore culpa dolorum labore consequatur incidunt dignissimos est reprehenderit maxime atque!</p>
        </div>
      </div>
  )
}

export default BlogCard;
