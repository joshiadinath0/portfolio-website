import "./App.css";
import MouseParticles from "react-mouse-particles";
function App() {
  function handleScroll() {
    window.scroll({
      top: 1000,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="App">
      <MouseParticles
        g={1}
        color="random"
        cull="MuiSvgIcon-root,MuiButton-root"
        level={7}
      />
      <div className="Toolbar-resume">
        <a href="https://drive.google.com/file/d/10yADelBM0zpkQgW_U4rhBXmO1HtJjC1S/view?usp=sharing">
          RESUME/CV
        </a>
      </div>
      <div className="Toolbar">
        <a>HOME</a>
        <a onClick={handleScroll}> ABOUT</a>
        <a onClick={handleScroll}>CONTACT</a>
      </div>

      <div className="welcome">
        <h1>WELCOME!</h1>
      </div>
      <div className="name">
        <p>I Am Adinath Joshi</p>
      </div>
      <div className="intro">
        <p>
          I am an undergrad at Ramrao Adik Institute of Technology majoring in
          Electronics and Telecommunication.
        </p>
        <p>
          I ♡ building stuff, and enjoy working on meaningful and challenging
          problems
        </p>
      </div>
      <div className="icons">
        <a href="https://www.linkedin.com/in/adinathjoshi/">
          <img src="https://img.icons8.com/nolan/64/linkedin-circled.png" />
        </a>
        <a href="https://twitter.com/Adijazzy08">
          <img src="https://img.icons8.com/nolan/64/twitter-circled.png" />
        </a>
        <a href="https://github.com/joshiadinath0">
          <img src="https://img.icons8.com/nolan/64/github.png" />
        </a>
        <a href="https://www.instagram.com/_adiiinathhh_/">
          <img src="https://img.icons8.com/nolan/64/instagram-new.png" />
        </a>
      </div>
      <div className="skills">
        <p>SKILLS:</p>
      </div>

      <div className="skill">
        <p>JAVA ,C ,REACT ,HTML ,CSS.</p>
      </div>

      <div className="image">
        <img src="./image.png"></img>
      </div>
      <div className="background"></div>
      <div className="contact">
        <h1>
          CONTACT:<br></br>EMAIL: joshiadinath0@gmail.com<br></br>MOBILE:
          +917400383241
        </h1>
      </div>
      <div className="about">
        <h1>Made with ♡ in React </h1>
      </div>
      <div class="back"></div>
    </div>
  );
}

export default App;
