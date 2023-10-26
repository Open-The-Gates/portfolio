import logo from "./logo.svg";
import "./App.css";
import resume from "./resume.pdf"; 
import pdf from "./pdf.png"; 
import bg from "./colorful-planets.jpg"; 
import cmd from "./cmd.png"; 
import { TypeAnimation } from "react-type-animation";

function App() {

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resume; 
    link.download = resume; 
    link.click();
  };

  return (
    <div
      className="App"
      style={{ backgroundImage:`url(${bg})`}}
    >
      <div className="cmd" style={{ backgroundImage:`url(${cmd})`}}>
        {" "}
        <TypeAnimation
          sequence={[
            "C:\\Users\\Ayman OUKACHA> Hello ! I am a full stack Java Javascript developer !",
            500,
            "C:\\Users\\Ayman OUKACHA> I am experienced in the Spring Boot & React Frameworks \n ",
            500,
            "C:\\Users\\Ayman OUKACHA>  I have had the privilege of working with several industry-leading solutions and frameworks",
            500,
            "C:\\Users\\Ayman OUKACHA> like Java, Spring ( Boot, Core, Security, Data, AOP ), Hibernate.",
            500,
            "C:\\Users\\Ayman OUKACHA> Javascript, ReactJS, HTML, CSS, Bootstrap.",
            500,
            "C:\\Users\\Ayman OUKACHA> Git, Docker, IntelliJ, VSCode.",
            500,
            "C:\\Users\\Ayman OUKACHA> Kafka, Microservice, Event Sourcing, CQRS.",
            500,
            "C:\\Users\\Ayman OUKACHA> Junit, Mockito. ",
            500,
            "C:\\Users\\Ayman OUKACHA> Web3, Solidity, Hardhat, OpenZeppelin. ",
            500,
            "C:\\Users\\Ayman OUKACHA> I have had the privilege of working on a diverse range of rich projects throughout my career. ",
            500,
            "C:\\Users\\Ayman OUKACHA> Full Stack & Big Data Engineer --CGI --03/2020 –> 09/2020 --Internship",
            500,
            "C:\\Users\\Ayman OUKACHA> Java Spring Full Stack Developer --CGI/Les Grands Chais de France --09/2020–>02/2022",
            500,
            "C:\\Users\\Ayman OUKACHA> Java Spring Full Stack Developer --Eastelson/Euro Protection Surveillance --02/2022–>09/2023",
            500,
            "C:\\Users\\Ayman OUKACHA> Web3 Full Stack developer --Jaypegs --08/2022–>01/2023 --Part_Time",
            500,
            "C:\\Users\\Ayman OUKACHA> React Web3 Full Stack developer --DEFI --01/2023–>06/2023 --Part_Time",
            500,
            "C:\\Users\\Ayman OUKACHA> Java React Analyst Full Stack Developer --Aremis 09/2022–>Today",
            500,
          ]}
          wrapper="span"
          speed={45}
          style={{
            color: "white",
            marginTop: "60px",
            fontFamily: "monospace",
            fontSize: "1em",
            display: "inline-block",
            marginRight: "30px",
          }}
          repeat={Infinity}
        />
      </div>
      <div className="resume" onClick={downloadResume}>
        <div className="placeholder"></div>
        <img src={pdf} alt="Resume" height={"40px"} />
        <div className="icon">resume.pdf</div>
        </div>
    </div>
  );
}

export default App;
