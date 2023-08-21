import React from "react";
import Navbar from "../Navbar/Navbar";
import hero from "../../assets/hero.jpg";
import code from "../../assets/code.jpg";
import signup from "../../assets/signup.png";
import welcome from "../../assets/welcome.png";
import learning from "../../assets/learning.png";
import { BsBoxArrowUp } from "react-icons/bs";
import ec2 from "../../assets/ec2.jpg"
import "./landing.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Landing = () => {
  return (
    <div className="landing">
    <div className="landing-page">
      <Navbar />
      <div className="landing-page-hero">
        <img src={hero} alt="hero" />
        <div className="landing-page-hero-text">
          <h3>
            Connect, Collaborate, learn everything Data Science & Artificial
            Intelligence
          </h3>
          <button className="">Join DSAIC</button>
        </div>
      </div>
      <div className="motive">
        <h2>Our Motive</h2>
        <p>
          At DSAIC we believe there is no limit to learning. We embrace peer
          learning & community support.
        </p>
        <div className="motive-pictures">
          <div className="motive-picture">
            <img src={code} alt="code" />
            <div className="motive-picture-text">
              <h3>Study, Learn & Grow</h3>
              <p>Join a community that will see you through your journey</p>
            </div>
          </div>
          <div className="motive-picture">
            <img src={code} alt="code" />
            <div className="motive-picture-text">
              <h3>Debugging</h3>
              <p>Join a community that will see you through your journey</p>
            </div>
          </div>
          <div className="motive-picture">
            <img src={code} alt="code" />
            <div className="motive-picture-text">
              <h3>Mentorship</h3>
              <p>Join a community that will see you through your journey</p>
            </div>
          </div>
        </div>
        <div className="motive-btns">
          <button className="motive-btn">Find Your Zen</button>
          <button className="motive-btn">Network</button>
          <button className="motive-btn">Collaboration</button>
          <button className="motive-btn">Build cool stuff</button>
        </div>
      </div>
      <div className="join-dsaic">
        <h2>How to join DSAIC</h2>
        <p>
          Meet new people who share your passion in Data Science & AI in
          in-person events.
        </p>
        <p>It's free to create a new account.</p>
        <div className="join-dsaic-contents">
          <div className="join-dsaic-group">
            <div className="join-dsaic-content">
              <img src={signup} alt="signup" />
              <p>
                <span>01. </span>Register as a member
              </p>
            </div>
            <div className="join-dsaic-content">
              <img src={welcome} alt="welcome" />
              <p>
                <span>02. </span>Explore the community
              </p>
            </div>
            <div className="join-dsaic-content">
              <img src={learning} alt="learning" />
              <p>
                <span>03. </span>Have fun learning & collaborating
              </p>
            </div>
          </div>
          <button className="join-dsaic-btn">Join DSAIC</button>
        </div>
      </div>
      <div className="events">
        <div className="events-header">
          <h3>Upcoming events</h3>
          <Link className="links"><p>Explore more events</p></Link>
        </div>
        <div className="events-cards">
          <div className="events-card">
            <div className="events-card-img">
              <img src={signup} alt="code" />
            </div>
            <div className="events-card-text">
              <p>Tuesday, Aug 15 5:00pm EAT </p>
              <p>Introduction to Pandas</p>
            </div>
            <div className="events-card-venue">
              <p>Online</p>
              <BsBoxArrowUp size={20} />
            </div>
          </div>
          <div className="events-card">
            <div className="events-card-img">
              <img src={signup} alt="code" />
            </div>
            <div className="events-card-text">
              <p>Tuesday, Aug 15 5:00pm EAT </p>
              <p>Introduction to Pandas</p>
            </div>
            <div className="events-card-venue">
              <p>Online</p>
              <BsBoxArrowUp size={20} />
            </div>
          </div>
          <div className="events-card">
            <div className="events-card-img">
              <img src={signup} alt="code" />
            </div>
            <div className="events-card-text">
              <p>Tuesday, Aug 15 5:00pm EAT </p>
              <p>Introduction to Pandas</p>
            </div>
            <div className="events-card-venue">
              <p>Online</p>
              <BsBoxArrowUp size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="gallery-header">
        <h2>Gallery</h2>
        <Link className="links"><p>More photos</p></Link>
        </div>
        <div className="gallery-pictures">
          <img src={ec2} alt="gallery-pic" />
          <img src={ec2} alt="gallery-pic" />
          <img src={ec2} alt="gallery-pic" />
          <img src={ec2} alt="gallery-pic" />
          </div>
          </div>
    </div>
    <Footer />
    </div>
  );
};

export default Landing;
