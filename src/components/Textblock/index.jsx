/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import John from "../../assets/John.jpg";
import checker from "../../assets/checker.jpg";
import wabot1 from "../../assets/wabot1.png";
import "./index.css";

const TextBlock = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabTitleStyle = {
    color: "#fff",
    fontWeight: 800,
    fontSize: 32,
  };

  const activeTabTitleStyle = {
    ...tabTitleStyle,
    color: "#1EBBD7",
  };

  return (
    <div>
      <div className="content-container" id="about">
        <Container className="pt-5">
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab"
            className="mb-3"
            fill
            style={{ backgroundColor: "#1EBBD7" }}
            onSelect={(e) => setActiveTab(e)}
          >
            <Tab
              eventKey="home"
              title={
                <span
                  style={
                    activeTab !== "home" ? tabTitleStyle : activeTabTitleStyle
                  }
                >
                  Home
                </span>
              }
            >
              <div className="additional-content">
                <h2>What is AiExcel?</h2>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AiExcel is a web platform
                  designed to support students with their academic demands. The
                  platform features a categorized curated variety of links to
                  AI-powered tools and resources including natural language
                  processing tools, and computer vision tools.
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The web platform aims to make it
                  easier for users to discover and access its wide range list of
                  AI-powered tools available. Thus, ultimately increase the
                  user's engagement with AI while gratifying their interest to
                  potentially contribute to the development of AI across
                  industries in the future.
                </p>
              </div>
            </Tab>
            <Tab
              onSelect={() => setActiveTab("about")}
              eventKey="about"
              title={
                <span
                  style={
                    activeTab !== "about" ? tabTitleStyle : activeTabTitleStyle
                  }
                >
                  About
                </span>
              }
            >
              <div className="additional-content">
                <h2>Importance of AI</h2>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Artificial intelligence (AI)
                  makes it possible for machines to learn from experience,
                  adjust to new inputs and perform human-like tasks. Most AI
                  examples that you hear about today – from chess-playing
                  computers to self-driving cars – rely heavily on deep learning
                  and natural language processing. Using these technologies,
                  computers can be trained to accomplish specific tasks by
                  processing large amounts of data and recognizing patterns in
                  the data.
                </p>
                <h2>History of AI (Trivias)</h2>
                <p>
                  • The term "Artificial Intelligence" was first coined by
                  computer scientist John McCarthy in 1956 at the Dartmouth
                  Conference.
                </p>
                <img src={John} alt="Picture of JohnMcarthny" />
                <p>
                  • The first AI program was developed in 1951 by Christopher
                  Strachey. The program was called "checkers" and it played the
                  game of checkers on a computer.
                </p>
                <img src={checker} alt="Picture of checker game" />
                <p>
                  • The first robot with artificial intelligence was created in
                  1973 by Waseda University in Japan. The robot was called
                  WABOT-1 and was capable of moving and performing simple tasks.
                  (WABOT-1 , WABOT-2)
                </p>
                <img src={wabot1} alt="Picture of Wambot 1-2" />
              </div>
            </Tab>{" "}
            <Tab
              onSelect={() => setActiveTab("survey")}
              eventKey="survey"
              title={
                <span
                  style={
                    activeTab !== "survey" ? tabTitleStyle : activeTabTitleStyle
                  }
                >
                  Survey
                </span>
              }
            >
              <div className="additional-content">
                <h2>AiExcel Survey</h2>{" "}
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DISCLAIMER: The following
                  questions will be used for general analytical use only.
                  Although your educational level is sent along with your
                  answers, your specific responses will not be connected to you
                  in any way whatsoever. The data collected during the survey
                  will be stored securely on our servers. Access to the data
                  will be limited to authorized personnel only. We will take all
                  reasonable precautions to protect the information you provide.
                  After your results are added into the final tally, your
                  personal info will be deleted from any records we may have.
                </p>
                <h2>
                  <a
                    href="https://forms.gle/3yk5c4kA7jyGbP1A8"
                    style={{
                      color: "white",
                      fontSize: "50px",
                    }}
                    onClick={() => {
                      alert(
                        "DISCLAIMER: The following questions w will be used for general analytical use only. Although your educational level is sent along with your answers, your specific responses will not be connected to you in any way whatsoever. The data collected during the survey will be stored securely on our servers. Access to the data will be limited to authorized personnel only. We will take all reasonable precautions to protect the information you provide. After your results are added into the final tally, your personal info will be deleted from any records we may have."
                      );
                    }}
                    target="_blank"
                  >
                    Link to Survey
                  </a>
                </h2>
              </div>
            </Tab>
          </Tabs>
        </Container>
      </div>
    </div>
  );
};

export default TextBlock;
