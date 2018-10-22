import React, { Component } from 'react';
import axios from 'axios';


class Resume extends Component{
constructor(props){
  super(props);
  this.openNav = this.openNav.bind(this);
  this.closeNav =this.closeNav.bind(this);
}

handleAddOption = (e) => {
  e.preventDefault();
  const fields ={};
  fields.name  = e.target.elements.name.value.trim();
  e.target.elements.name.value='';
  fields.email  = e.target.elements.email.value.trim();
  e.target.elements.email.value='';
  fields.subject  = e.target.elements.subject.value.trim();
  e.target.elements.subject.value='';
  fields.message  = e.target.elements.message.value.trim();
  e.target.elements.message.value='';
  console.log(fields);
  axios.post('/api/resume/submit', fields)
   .then(res => 'hi')
   .catch(err =>'error occured');

   var para = document.createElement("h3");
   var node = document.createTextNode("Thank for Contacting. I will get back to you soon");
   para.appendChild(node);
   var element = document.getElementById("sent");
   element.appendChild(para);

}

openNav = () => {
    document.getElementById("mySidebar").style.width = "61%";
    document.getElementById("mySidebar").style.display = "block";
}

closeNav = () => {
    document.getElementById("mySidebar").style.display = "none";
}



  render() {
    return (
      <div>

      <nav className="w3-sidebar w3-hide-medium w3-hide-small" style={{width:"40%"}}>
        <div className="bgimg"></div>
      </nav>
      <nav className="w3-sidebar w3-black w3-animate-right w3-xxlarge" style={{display:"none",paddingTop:"80px",right:"0",zIndex:"2"}} id="mySidebar">
        <a href="javascript:void(0)" onClick={this.closeNav} className="w3-button w3-black w3-xxxlarge w3-display-topright" style={{padding:"0 12px"}}>
          <i className="fa fa-remove"></i>
        </a>
        <div className="w3-bar-block w3-center">
          <a href="#" className="w3-bar-item w3-button w3-text-grey w3-hover-black" onClick={this.closeNav}>Home</a>
          <a href="#about" className="w3-bar-item w3-button w3-text-grey w3-hover-black" onClick={this.closeNav}>About</a>
          <a href="#myskills" className="w3-bar-item w3-button w3-text-grey w3-hover-black" onClick={this.closeNav}>My Skills</a>
          <a href="#workexp" className="w3-bar-item w3-button w3-text-grey w3-hover-black" onClick={this.closeNav}>Work</a>
          <a href="#education" className="w3-bar-item w3-button w3-text-grey w3-hover-black" onClick={this.closeNav}>Education</a>
          <a href="#portfolio" className="w3-bar-item w3-button w3-text-grey w3-hover-black" onClick={this.closeNav}>Portfolio</a>
          <a href="#contact" className="w3-bar-item w3-button w3-text-grey w3-hover-black" onClick={this.closeNav}>Contact</a>
        </div>
      </nav>
      <div className="w3-main w3-padding-large" style={{marginLeft:"40%"}}>

        <span className="w3-button w3-top w3-white w3-xxlarge w3-text-grey w3-hover-text-black" style={{width:"auto",right:"0"}} onClick={this.openNav}><i className="fa fa-bars"></i></span>

        <header className="w3-container w3-center" style={{padding:"50px 16px"}} id="home">
          <a href="#portfolio"><h1 className="w3-jumbo"  ><b>Amanjeet Singh </b></h1></a>
          <p><strong>Frontend/UI/Fullstack Developer</strong></p>
          <img src="Resumepic.jpg" className="w3-image w3-hide-large w3-hide-small w3-round" style={{display:"block",width:"60%",margin:"auto"}} />
          <img src="Resumepic.jpg" className="w3-image w3-hide-large w3-hide-medium w3-round" width="1000" height="1333" />
          <a href="https://www.linkedin.com/in/amanjeet-gilard-825515b4/" target="_blank"><i className="fa fa-linkedin w3-hover-opacity"></i></a>
          <a href="https://angel.co/amanjeet-singh-4" target="_blank"><i className="fa fa-angellist w3-hover-opacity"></i></a>
          <a href="https://www.facebook.com/amanjeet.singh.100" target="_blank"><i className="fa fa-facebook-official w3-hover-opacity"></i></a>
          <a href="https://www.github.com/amanjeet17/" target="_blank"><i className="fa fa-github" aria-hidden="true"></i> </a>
          <br />
          <a href="Amanjeet_Singh_Resume.pdf" download="Amanjeet_Singh_Resume.pdf">
          <button className="w3-button w3-light-grey w3-padding-large w3-margin-top">
            <i className="fa fa-download"></i> Download Resume
          </button>
          </a>
        </header>



        <div className="w3-content w3-justify w3-text-grey w3-padding-32" id="about">
          <h2>About Me</h2>
          <hr className="w3-opacity" />
          <p>
          I love to code. Goal Oriented. Like to work in fun cool friendly environment companies.
          Dedicated to work. Believes in learning new technologies. Web Tech interests me,but at same time AI/ML enthusiast also.
          </p>
          <p>Work Philosphy:I give you quality CODE you give me quantity MONEY. LOL. Just kidding. I take care of company as and when in whatever way required with expectation of  vice-versa.</p>
          <h3 className="w3-padding-16" id="myskills">My Skills</h3>
          <p className="w3-wide">React JS</p>
          <div className="w3-light-grey">
            <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:"90%"}}>90%</div>
          </div>
          <p className="w3-wide">Meteor JS</p>
          <div className="w3-light-grey">
            <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:"85%"}}>85%</div>
          </div>
          <p className="w3-wide">Angular JS</p>
          <div className="w3-light-grey">
            <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:"70%"}}>70%</div>
          </div>
          <p className="w3-wide">Node JS</p>
          <div className="w3-light-grey">
            <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:"75%"}}>75%</div>
          </div>
          <p className="w3-wide">Javascript</p>
          <div className="w3-light-grey">
            <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:"88%"}}>88%</div>
          </div>
          <p className="w3-wide">Python</p>
          <div className="w3-light-grey">
            <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:"70%"}}>70%</div>
          </div>
          <p className="w3-wide">C/C++</p>
          <div className="w3-light-grey">
            <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:"60%"}}>60%</div>
          </div>
          <p className="w3-wide">HTML</p>
          <div className="w3-light-grey">
            <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:"91%"}}>91%</div>
          </div>
          <p className="w3-wide">CSS</p>
          <div className="w3-light-grey">
            <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:"84%"}}>84%</div>
          </div>
          <p className="w3-wide">Bootstrap</p>
          <div className="w3-light-grey">
            <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:"80%"}}>80%</div>
          </div><br />


          <h3 className="w3-padding-24" id="workexp"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-grey-grey"></i>Work Experience</h3>
          <div className="w3-container">
          <a href="https://www.worldtradebureau.org" target="_blank">
            <img src="wtblogo.jpeg" alt="WTB" className="w3-left w3-circle w3-margin-right logo" style={{width:"80px"}} />

               <h5 className="w3-opacity"><b>Fullstack Web Developer / World Trade Bureau</b></h5>
               <h6 className="w3-grey-grey"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Dec 2017 - <span className="w3-tag w3-grey w3-round">Current</span></h6>
               </a>
               <ul>
                 <li>Created Platform Catalog single-handedly using Python Scripts</li>
                 <li>Created Dashboards for different roles using React and Blaze Templating</li>
                 <li>Correct routing of product enquiry generated anywhere on Platform</li>
                 <li>Microsite for each vendor showing aggregate rating of and products sold by vendor.</li>
                 <li>Created post order tracking system.</li>
                 <li>Revamped the Navbar for Mobile View.</li>
                 <li>Module for Uploading bulk products at once via CSV using Python script</li>
                 <li>Built the whole Catalog of the Companys Web Platform</li>
                 <li>Web-Scrapper using Python to scrap Data from various e-commerve websites</li>
               </ul>
               <hr />
          </div>
           <div className="w3-container">
           <a href="https://www.linkedin.com/company/dacube/?originalSubdomain=in" target="_blank">
             <img src="DACubelogo.png" alt="DACube Technologies" className="w3-left w3-circle w3-margin-right logo" style={{width:"80px"}} />

                <h5 className="w3-opacity"><b>Front End Developer / DACubeTechologies</b></h5>
                <h6 className="w3-text-grey"><i className="fa fa-calendar fa-fw w3-margin-right"></i>Aug2017-Nov2017</h6>
                </a>
                <ul>
                  <li>Improved the Front-end as per clients requirements.</li>
                  <li>Modified PDP and PLP of website</li>
                  <li>Seting Up and Deployment of Magento Builds</li>
                </ul>
                <hr />
              </div>
        <h3 className="w3-padding-24" id="education"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-grey-grey"></i>Education</h3>
        <div className="w3-container">
             <h5 className="w3-opacity"><b>PES Institute of Technology, Bangalore</b></h5>
             <h6 className="w3-grey-grey"><i className="fa fa-calendar fa-fw w3-margin-right"></i>June 2017</h6>
             <ul>
               <li>B.E Major in <b>Electronics and Communication</b></li>
             </ul>
             <hr />
        </div>
         <div className="w3-container">
              <h5 className="w3-opacity"><b>Sir Padampat Singhania School</b></h5>
              <h6 className="w3-text-grey"><i className="fa fa-calendar fa-fw w3-margin-right"></i>June 2012</h6>
              <ul>
                <li>Graduated High School</li>
              </ul>
              <hr />
            </div>
        </div>

        <div className="w3-padding-32 w3-content" id="portfolio">
          <h2 className="w3-text-grey">My Portfolio</h2>
          <hr className="w3-opacity" />

          <div className="w3-row-padding" style={{margin:"0 -16px"}}>
            <div className="w3-half">
              <a href="https://crowd-genie.herokuapp.com/" target="_blank"><img src="Loan.jpg" style={{width:"100%"}} /></a>
              <a href="https://grabbd-aman.herokuapp.com/" target="_blank"><img src="GRABD.jpg" style={{width:"100%"}} /></a>
              <a href="https://www.uroveneer.com/" target="_blank"><img src="uroveneer.jpg" style={{width:"100%"}} /></a>
            </div>

            <div className="w3-half">
                <a href="https://www.worldtradebureau.org/" target="_blank"><img src="WTB.jpg" style={{width:"100%"}} /></a>
                <a href="https://fsjars-aman.herokuapp.com/" target="_blank"><img src="FSJARS.jpg" style={{width:"100%"}} /></a>
                <a href="https://fullthrotle-aman.herokuapp.com/" target="_blank"><img src="FTA.jpg" style={{width:"100%"}} /></a>
            </div>
          </div>
        </div>

        <div className="w3-padding-32 w3-content w3-text-grey" id="contact" style={{marginBottom:"64px"}}>
          <h2>Contact Me</h2>
          <hr className="w3-opacity" />

          <div className="w3-section">
            <p><i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i> Bengaluru, Karnataka India</p>
            <p><i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone: +91 7406017191</p>
            <p><i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> Email: amanjeetgilard@gmail.com</p>
          </div>
          <p>Lets get in touch. Send me a message:</p>
          <form onSubmit={this.handleAddOption}>
            <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="name" /></p>
            <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Email" required name="email" /></p>
            <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Subject" required name="subject" /></p>
            <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Message" required name="message" /></p>
            <p>
              <button className="w3-button w3-light-grey w3-padding-large" type="submit">
                <i className="fa fa-paper-plane"></i> SEND MESSAGE
              </button>
              <div id="sent"></div>
            </p>
          </form>
        </div>
      </div>




      </div>
    );
  }
}

export default Resume;
