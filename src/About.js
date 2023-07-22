import React from "react";
// import profileImage from "../../assets/large/Profile/Profile_Pic.png";

function About() {
  return (
    <section class="about" id="about_link">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      {/* <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div> */}
         
        <h2>About me</h2>

        <p>
          I was born in Manchester Connecticut and grew up in Central FL. My
          hobbies are video games and Muay Thai. When i'm not playing or
          fighting I enjoy hanging out with my five year old daughter. The
          motivation for this career change is a better life for her and me.
        </p>
      
       
        </section>
  );
}

export default About;