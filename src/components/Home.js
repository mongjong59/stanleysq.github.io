import React from "react"
import { withRouter } from "react-router"
import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => (
  <div className="home-wrapper">
    <video className="home-video" autoPlay loop src="http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/comp_HK_H004_C008_v10_6Mbps.mov">
    </video>
    <div className="home-text-box">
      <h1 className="home-header">Hi, my name is Stanley Sun</h1>
      <p>
        I'm a full-stack developer based in China and I'm enthusiastic about utilizing technologies to create products that satisfy people's needs. Previously, I have taken part in several excting projects working mostly on the development of web softwares (both frontend and backend development). They play an essential part of the whole solution by integrating various services (e.g. Facebook for Developers, WeChat Platform, Twilio) and technologies (e.g. interactive kiosk, RFID) and acting as an interface for the end-users. I also occasionally take care of the deployment and maintaince of such softwares. You can <Link to="/portfolio">click here</Link> to check out details of these projects.
      </p>
      <p>
        Github:&nbsp;
        <a href="https://github.com/retroalgic/">
          https://github.com/retroalgic
        </a>
        {/* <br />
        Stack Overflow:&nbsp;
        <a href="https://stackoverflow.com/users/4499464/retroalgic/">
          https://stackoverflow.com/users/4499464/retroalgic
        </a> */}
        <br />
        Email:&nbsp;
        <a href="mailto://stanley.sq@outlook.com/">
          stanley.sq@outlook.com
        </a>
      </p>

      <p className="home-footnote">Background video: Apple TV screensaver - Hong Kong (the gorgeous city where I lived for 3 years)</p>
    </div>
  </div>
)

export default withRouter(Home)
