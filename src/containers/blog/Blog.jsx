import React from "react";
import "./blog.css";
import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";
import blog04 from "../../assets/blog04.png";
import blog05 from "../../assets/blog05.png";

const Blog = () => {
  return (
    <>
      <h1 className="gradienr_text title-blog">
        A lot is happening, <br /> We are blogging about it.
      </h1>
      <div className="gbt3_blog">
        <div className="item1">
          <div
            className="gbt3_blog_thumbn"
            style={{ backgroundImage: `url(${blog01})` }}
          ></div>
          <div className="gbt3_blog_info">
            <div>
              <span>Sep 26, 2021</span>
              <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
            </div>
            <p>Read Full Article</p>
          </div>
        </div>
        <div className="item2">
          <div
            className="gbt3_blog_thumbn"
            style={{ backgroundImage: `url(${blog02})` }}
          ></div>
          <div className="gbt3_blog_info">
            <div>
              <span>Sep 26, 2021</span>
              <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
            </div>
            <p>Read Full Article</p>
          </div>
        </div>
        <div className="item3">
          <div
            className="gbt3_blog_thumbn"
            style={{ backgroundImage: `url(${blog03})` }}
          ></div>
          <div className="gbt3_blog_info">
            <div>
              <span>Sep 26, 2021</span>
              <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
            </div>
            <p>Read Full Article</p>
          </div>
        </div>
        <div className="item4">
          <div
            className="gbt3_blog_thumbn"
            style={{ backgroundImage: `url(${blog04})` }}
          ></div>
          <div className="gbt3_blog_info">
            <div>
              <span>Sep 26, 2021</span>
              <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
            </div>
            <p>Read Full Article</p>
          </div>
        </div>
        <div className="item5">
          <div
            className="gbt3_blog_thumbn"
            style={{ backgroundImage: `url(${blog05})` }}
          ></div>
          <div className="gbt3_blog_info">
            <div>
              <span>Sep 26, 2021</span>
              <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
            </div>
            <p>Read Full Article</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
