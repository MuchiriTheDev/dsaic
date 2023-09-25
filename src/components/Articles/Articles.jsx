import React from "react";
import "./articles.css";
import { Link } from "react-router-dom";
import typing from "../../assets/typing.jpg";
import { BiSearch } from "react-icons/bi";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const Articles = () => {
  return (
    <div className="articles">
      <Navbar />
      <section className="card-section">
        <div className="left-info">
          <div className="article-content">
            <h1 className="article-title">Title of the Article</h1>
            <p className="article-info">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. sit amet
              consectetur adipisicing elit.Iusto doloribus nemo, quo vel cum?
            </p>
          </div>
          <div className="mini-btns">
            <div className="mini">
              <button>Keras</button>
              <button>Python</button>
            </div>
          </div>
          <div className="name-corner">
            <p className="intro">Written by:</p>
            <div className="article-owner">
              <div className="circle"></div>
              <h2 className="article-owner-name">John Doe</h2>
            </div>
          </div>

          <div className="main-btn">
            <button className="read-more">Read More</button>
          </div>
        </div>
        <div className="right-info">
          <img src={typing} className="rimg" alt="person typing" />
        </div>
      </section>
      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      <div className="grid-search-text">
        {/* <BiSearch size={20} className="icon-search" /> */}
        <input type="text" placeholder="Search" class="search-box" />
      </div>

      <section className="grid-section">
        <div className="grid-item">
          <img src={typing} alt="person typing" />
          {/* <div className="grid-upper-text"> */}
          <div className="grid-article-content">
            <h1 className="grid-article-title">Title of the Article</h1>
            <p className="grid-article-info">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
              eos mollitia cum?
            </p>
          </div>
          <div className="grid-mini-buttons">
            <button className="keras">Keras</button>
            <button className="python">Python</button>
          </div>
          <div className="name-corner">
            <p className="intro">Written by:</p>
            <div className="article-owner">
              <div className="circle"></div>
              <h2 className="article-owner-name">John Doe</h2>
            </div>
          </div>
          <button className="grid-read-more">Read More</button>
          {/* </div> */}
        </div>
        <div className="grid-item">
          <img src={typing} alt="person typing" />
          {/* <div className="grid-upper-text"> */}
          <div className="grid-article-content">
            <h1 className="grid-article-title">Title of the Article</h1>
            <p className="grid-article-info">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
              eos mollitia cum?
            </p>
          </div>
          <div className="grid-mini-buttons">
            <button className="keras">Keras</button>
            <button className="python">Python</button>
          </div>
          <div className="name-corner">
            <p className="intro">Written by:</p>
            <div className="article-owner">
              <div className="circle"></div>
              <h2 className="article-owner-name">John Doe</h2>
            </div>
          </div>
          <button className="grid-read-more">Read More</button>
          {/* </div> */}
        </div>
        <div className="grid-item">
          <img src={typing} alt="person typing" />
          {/* <div className="grid-upper-text"> */}
          <div className="grid-article-content">
            <h1 className="grid-article-title">Title of the Article</h1>
            <p className="grid-article-info">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
              eos mollitia cum?
            </p>
          </div>
          <div className="grid-mini-buttons">
            <button className="keras">Keras</button>
            <button className="python">Python</button>
          </div>
          <div className="name-corner">
            <p className="intro">Written by:</p>
            <div className="article-owner">
              <div className="circle"></div>
              <h2 className="article-owner-name">John Doe</h2>
            </div>
          </div>
          <button className="grid-read-more">Read More</button>
          {/* </div> */}
        </div>
        <div className="grid-item">
          <img src={typing} alt="person typing" />
          {/* <div className="grid-upper-text"> */}
          <div className="grid-article-content">
            <h1 className="grid-article-title">Title of the Article</h1>
            <p className="grid-article-info">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
              eos mollitia cum?
            </p>
          </div>
          <div className="grid-mini-buttons">
            <button className="keras">Keras</button>
            <button className="python">Python</button>
          </div>
          <div className="name-corner">
            <p className="intro">Written by:</p>
            <div className="article-owner">
              <div className="circle"></div>
              <h2 className="article-owner-name">John Doe</h2>
            </div>
          </div>
          <button className="grid-read-more">Read More</button>
          {/* </div> */}
        </div>
        <div className="grid-item">
          <img src={typing} alt="person typing" />
          {/* <div className="grid-upper-text"> */}
          <div className="grid-article-content">
            <h1 className="grid-article-title">Title of the Article</h1>
            <p className="grid-article-info">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
              eos mollitia cum?
            </p>
          </div>
          <div className="grid-mini-buttons">
            <button className="keras">Keras</button>
            <button className="python">Python</button>
          </div>
          <div className="name-corner">
            <p className="intro">Written by:</p>
            <div className="article-owner">
              <div className="circle"></div>
              <h2 className="article-owner-name">John Doe</h2>
            </div>
          </div>
          <button className="grid-read-more">Read More</button>
          {/* </div> */}
        </div>
        <div className="grid-item">
          <img src={typing} alt="person typing" />
          {/* <div className="grid-upper-text"> */}
          <div className="grid-article-content">
            <h1 className="grid-article-title">Title of the Article</h1>
            <p className="grid-article-info">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
              eos mollitia cum?
            </p>
          </div>
          <div className="grid-mini-buttons">
            <button className="keras">Keras</button>
            <button className="python">Python</button>
          </div>
          <div className="name-corner">
            <p className="intro">Written by:</p>
            <div className="article-owner">
              <div className="circle"></div>
              <h2 className="article-owner-name">John Doe</h2>
            </div>
          </div>
          <button className="grid-read-more">Read More</button>
          {/* </div> */}
        </div>
        <div className="grid-item">
          <img src={typing} alt="person typing" />
          {/* <div className="grid-upper-text"> */}
          <div className="grid-article-content">
            <h1 className="grid-article-title">Title of the Article</h1>
            <p className="grid-article-info">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
              eos mollitia cum?
            </p>
          </div>
          <div className="grid-mini-buttons">
            <button className="keras">Keras</button>
            <button className="python">Python</button>
          </div>
          <div className="name-corner">
            <p className="intro">Written by:</p>
            <div className="article-owner">
              <div className="circle"></div>
              <h2 className="article-owner-name">John Doe</h2>
            </div>
          </div>
          <button className="grid-read-more">Read More</button>
          {/* </div> */}
        </div>
        <div className="grid-item">
          <img src={typing} alt="person typing" />
          {/* <div className="grid-upper-text"> */}
          <div className="grid-article-content">
            <h1 className="grid-article-title">Title of the Article</h1>
            <p className="grid-article-info">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
              eos mollitia cum?
            </p>
          </div>
          <div className="grid-mini-buttons">
            <button className="keras">Keras</button>
            <button className="python">Python</button>
          </div>
          <div className="name-corner">
            <p className="intro">Written by:</p>
            <div className="article-owner">
              <div className="circle"></div>
              <h2 className="article-owner-name">John Doe</h2>
            </div>
          </div>
          <button className="grid-read-more">Read More</button>
          {/* </div> */}
        </div>

        <div className="grid-item">
          <img src={typing} alt="person typing" />
          {/* <div className="grid-upper-text"> */}
          <div className="grid-article-content">
            <h1 className="grid-article-title">Title of the Article</h1>
            <p className="grid-article-info">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
              eos mollitia cum?
            </p>
          </div>
          <div className="grid-mini-buttons">
            <button className="keras">Keras</button>
            <button className="python">Python</button>
          </div>
          <div className="name-corner">
            <p className="intro">Written by:</p>
            <div className="article-owner">
              <div className="circle"></div>
              <h2 className="article-owner-name">John Doe</h2>
            </div>
          </div>
          <button className="grid-read-more">Read More</button>
          {/* </div> */}
        </div>
      </section>
      <div className="numbers">
        <FaAngleLeft className="arrow" />
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <FaAngleRight className="arrow" />
      </div>

      <Footer />
    </div>
  );
};
export default Articles;
