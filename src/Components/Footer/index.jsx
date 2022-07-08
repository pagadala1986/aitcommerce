import React, { Component } from 'react';
import "./footer.css"

class Footer extends Component {
  render() {
    return (
      <footer>
        <section>
          <img src="https://www.achieversit.com/assets/images/AIT-white.jpg" alt='logo' />
          <p>AchieversIT - Provides a wide group of opportunities for freshers and Experienced candidate who can develop their skills and build their career opportunities across multiple Companies.</p>
        </section>
        <section>
          <h1>Company</h1>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Placements</a>
            </li>
            <li>
              <a>Corporate Training</a>
            </li>
            <li>
              <a>Contact US</a>
            </li>
          </ul>
        </section>
        <section>
        <h1>TRENDING COURSES</h1>
          <ul>
            <li>
              <a>UI Development Course</a>
            </li>
            <li>
              <a>Angular JS Course</a>
            </li>
            <li>
              <a>React JS Course</a>
            </li>
            <li>
              <a>Digital Marketing Course</a>
            </li>
            <li>
              <a>Python Course</a>
            </li>
          </ul>
        </section>
        <section>
        <h1>CONTACT INFO</h1>
          <ul>
            <li>
              <a>#63, 1st Floor, 16th Main, 8th Cross,BTM 1st Stage, Bangalore, India - 560029</a>
            </li>
            <li>
              <a>India : +91 8431-040-457</a>
            </li>
            <li>
              <a>info@achieversit.com</a>
            </li>
          </ul>
        </section>
      </footer>
    )
  }
}

export default Footer;
