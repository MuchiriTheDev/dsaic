import React from "react";
import "./articles.css";
import { Link } from "react-router-dom";

import typing from "../../assets/typing.jpg";
import { BiSearch } from "react-icons/bi";
import Footer from "../Footer/Footer";

const Articles = () => {
  return (
    <div className="articles">
      <div className="articles-nav">
        <h2 className="logo">Dsaic</h2>
        <div className="articles-nav-links">
          <ul>
            <Link className="links" to="/home">
              <li>Home</li>
            </Link>
            <Link className="links" to="/about">
              <li>About</li>
            </Link>
            <Link className="links" to="/events">
              <li>Events</li>
            </Link>
            <Link className="links" to="/hackathons">
              <li>Hackathons</li>
            </Link>
            <Link className="links" to="/resources">
              <li>Resources</li>
            </Link>
          </ul>
        </div>
        <div className="articles-nav-buttons">
          <Link to="/login">
            <button className="articles-nav-button">
              <span>Login</span>
            </button>
          </Link>
          <Link to="/signup">
            <button className="articles-nav-button">
              <span>Sign Up</span>
            </button>
          </Link>
        </div>
      </div>
      <section className="card-section">
        <div className="left-info">
          <div className="upper-text">
            <div className="article-content">
              <div className="article-owner">
                <div className="circle"></div>
                <h2 className="article-owner-name">John Doe</h2>
              </div>

              <h1 className="article-title">Title of the Article</h1>
              <p className="article-info">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
                doloribus nemo, quo vel cum?
              </p>
            </div>
            <div className="mini-btns">
              <div className="mini">
                <button>Keras</button>
                <button>Python</button>
              </div>
            </div>
            <div className="main-btn">
              <button className="read-more">Read More</button>
            </div>
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

      <div className="search-btn">
        <button className="search-button">
          <BiSearch size={20} className="icon-search" />
          Search
        </button>
      </div>
      <section className="grid-section">
        <div className="grid-item">
          <img src={typing} alt="person typing" />
          <div className="grid-upper-text">
            <div className="grid-article-owner">
              <div className="circle"></div>
              <h2 className="article-owner-name">John Doe</h2>
            </div>
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

            <button className="grid-read-more">Read More</button>
          </div>
        </div>
        <div className="grid-item">
          <img src={typing} alt="person typing" />
          <div className="grid-upper-text">
            <div className="grid-article-owner">
              <div className="circle"></div>
              <h2 className="article-owner-name">John Doe</h2>
            </div>
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

            <button className="grid-read-more">Read More</button>
          </div>
        </div>
        <div className="grid-item">
          <img src={typing} alt="person typing" />
          <div className="grid-upper-text">
            <div className="grid-article-owner">
              <div className="circle"></div>
              <h2 className="article-owner-name">John Doe</h2>
            </div>
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

            <button className="grid-read-more">Read More</button>
          </div>
        </div>
        <div className="grid-item">
          <img src={typing} alt="person typing" />
          <div className="grid-upper-text">
            <div className="grid-article-owner">
              <div className="circle"></div>
              <h2 className="article-owner-name">John Doe</h2>
            </div>
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

            <button className="grid-read-more">Read More</button>
          </div>
        </div>
        <div className="grid-item">
          <img src={typing} alt="person typing" />
          <div className="grid-upper-text">
            <div className="grid-article-owner">
              <div className="circle"></div>
              <h2 className="article-owner-name">John Doe</h2>
            </div>
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

            <button className="grid-read-more">Read More</button>
          </div>
        </div>
        <div className="grid-item">
          <img src={typing} alt="person typing" />
          <div className="grid-upper-text">
            <div className="grid-article-owner">
              <div className="circle"></div>
              <h2 className="article-owner-name">John Doe</h2>
            </div>
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

            <button className="grid-read-more">Read More</button>
          </div>
        </div>
        <div className="grid-item">
          <img src={typing} alt="person typing" />
          <div className="grid-upper-text">
            <div className="grid-article-owner">
              <div className="circle"></div>
              <h2 className="article-owner-name">John Doe</h2>
            </div>
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

            <button className="grid-read-more">Read More</button>
          </div>
        </div>
        <div className="grid-item">
          <img src={typing} alt="person typing" />
          <div className="grid-upper-text">
            <div className="grid-article-owner">
              <div className="circle"></div>
              <h2 className="article-owner-name">John Doe</h2>
            </div>
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

            <button className="grid-read-more">Read More</button>
          </div>
        </div>
        <div className="grid-item">
          <img src={typing} alt="person typing" />
          <div className="grid-upper-text">
            <div className="grid-article-owner">
              <div className="circle"></div>
              <h2 className="article-owner-name">John Doe</h2>
            </div>
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

            <button className="grid-read-more">Read More</button>
          </div>
        </div>
      </section>
      <div className="numbers">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
      {/* <section className="grid-footer">
        <div className="grid-footer-container">
          <div className="grid-footer-content">
            <div className="grid-footer-content-card">
              <h4>Your Account</h4>
              <ul>
                <li>Signup</li>
                <li>Login</li>
                <li>Help</li>
              </ul>
            </div>
            <div className="grid-footer-content-card">
              <h4>Quick Links</h4>
              <ul>
                <li>About</li>
                <li>Team</li>
                <li>Hackathons</li>
                <li>Team</li>
                <li>Resources</li>
                <li>Events</li>
              </ul>
            </div>
            <div className="grid-footer-content-card">
              <h4>Socials</h4>
              <ul>
                <li>Twitter: @dsaic_dekut</li>
                <li>LinkedIn: dsaic_dekut</li>
                <li>Medium: dsaic</li>
              </ul>
            </div>
            <div className="grid-footer-content-card">
              <h4>Contacts</h4>
              <ul>
                <li>Email: hellodsaic@dkut.ac.ke</li>
                <li>Phone: +254 000 000</li>
                <li>Address: Private Bag - 10143</li>
                <li>Location: Nyeri-Mweiga Road</li>
              </ul>
            </div>
          </div>
          <div className="grid-footer-bottom">
            <p>2023 @dsaic_dekut</p>
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
};
export default Articles;