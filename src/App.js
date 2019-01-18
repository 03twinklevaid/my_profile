import React, { Component } from 'react';
import './index.css';
class App extends Component {
  setRef = (element, sectionName) => {
    this[sectionName] = element;
  }

  jumpToSection = (sectionName) => {
    const section  = this[sectionName]
    console.log(section.offsetTop,"#####")
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="navigation">
            <ul>
              <li>
                <strong>HOME</strong>
              </li>
              <li onClick={() => this.jumpToSection("aboutSection")}>
                <strong>ABOUT</strong>
              </li>
              <li onClick={() => this.jumpToSection("contactSection")}>
                <strong>CONTACT</strong>
              </li>
              <li>
                <strong>RESUME</strong>
              </li>
              <li>
                <strong>PORTFOLIO</strong>
              </li>
              <li>
                <strong>BLOG</strong>
              </li>
            </ul>
          </div>
          <h1>TWINKLE VAID</h1>
          <h2><i>SOFTWARE DEVELOPER</i></h2>
        </div>
        <div className="about" ref={(element) => this.setRef(element, "aboutSection")}>
          {/* <div className="profile-img">
            <img src="https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg" alt="profile-img" />
          </div> */}
          <div className="description">
            <h3>About:</h3>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className="tech">
            <h3>Technologies:</h3>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="contact" ref = {(element) => {this.setRef(element,"contactSection")}}>
          <h1>CONTACT @</h1>
          <h2><i>TWINKLE.VAID@GMAIL.COM</i></h2>
          <h2><i>+91-987654321</i></h2>
        </div>
        <div className="footer">
        <p>
          <i>
            &copy; All Rights Reserved.Powered By the <strong>Twinkle Vaid</strong>.
          </i>
        </p>
        <ul>
          <li>
          <i className="fa fa-instagram" aria-hidden="true"></i>
          </li>
          <li>
          <i className="fa fa-github" aria-hidden="true"></i>
          </li>
          <li>
          <i className="fa fa-facebook" aria-hidden="true"></i>
          </li>
          <li>
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </li>
          <li>
          <i className="fa fa-google-plus" aria-hidden="true"></i>
          </li>
          <li>
          <i className="fa fa-twitter" aria-hidden="true"></i>
          </li>
        </ul>
        </div>
      </div>
    );
  }
}

export default App;
