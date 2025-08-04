import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={require('../assets/images/good.jpg')} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://www.linkedin.com/in/ratuauliam/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ratu Aulia Miftah</h1>
          <p>Marketing Management</p>

          <div className="mobile_social_icons">
            <a href="https://www.linkedin.com/in/ratuauliam/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;