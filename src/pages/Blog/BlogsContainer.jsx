import './BlogsContainer.css';
import BlogCard from './BlogCard.jsx';

const BlogsContainer = () => {
  return(
    <>
      <div className="blogCardContainer">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="navigation">
        <p>{"<"}</p>
        <p>{1}</p>
        <p>{2}</p>
        <p>{3}</p>
        <span>{"..."}</span>
        <p>{">"}</p>
      </div>
    </>
  )
} 

export default BlogsContainer;