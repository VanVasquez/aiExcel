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
                <h2>Purpose of AiExcel</h2>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AiExcel is a web platform
                  designed to support students with their academic demands. The
                  platform features a categorized curated variety of links to
                  AI-powered tools and resources including natural language
                  processing tools, and computer vision tools.
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The web platform aims to make it
                  easier for users to discover and access its wide range list of
                  AI-powered tools available.Thus, ultimately increase the
                  user's engagement with AI while gratifying their interest to
                  potentially contribute to the development of AI across
                  industries in the future.
                </p>
                <h2>Mission & Vision</h2>
                <p> 
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mission: At AiExcel, our mission is to empower students in their academic journey by providing easy access to a diverse collection of AI-powered tools and resources. We aim to support students in their academic demands through a curated platform that offers a categorized variety of links to cutting-edge AI softwares, including natural language processing tools and computer vision tools. 
                </p>  
                  <br/>
                <p>   
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vision: Our vision at AiExcel is to create a dynamic web platform that fosters a seamless discovery and accessibility of AI-powered tools for students. We envision a future where students can effortlessly tap into the potential of AI, gaining valuable insights and leveraging innovative technologies to excel in their academic pursuits.
                </p>
                <h2>Team Information</h2>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AiExcel was founded by Computer Science students of ICCT Colleges, an AI enthusiastic team with a strong commitment to revolutionizing the way students interact with artificial intelligence. At AiExcel, our team is composed of passionate individuals from diverse backgrounds, all driven by a common goal of supporting students and advancing the accessibility of AI technologies in education. 
                  <br></br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our team members bring together a unique blend of expertise in collaboration, web development, education, and user experience design. We work collaboratively to ensure that AiExcel provides the best possible resources and user experience for our valued visitors.
                </p>
                <h2>Privacy Policy</h2>
                <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; At AiExcel, we take the privacy and security of our users' information seriously. This Privacy Policy outlines how we collect, use, and protect personal data when you use our web platform. By accessing and using AiExcel, you agree to the terms described in this policy.
                </p>
                <br />
                <p>
                  <h3>Information Collection:</h3>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We may collect certain personally identifiable information from users, such as names, email addresses, and educational backgrounds, when they register on our platform or voluntarily provide it while using our services.
                </p>
                <br />
                <p>
                  <h3>Usage of Information:</h3>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The information we collect is used to improve our services, personalize user experience, and communicate important updates. We may also use aggregated and anonymized data for analytical purposes to enhance the functionality and content of AiExcel.
                </p>
                <p>
                  <h3>Data Security:</h3>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We implement industry-standard security measures to protect user data from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of data transmission over the internet or electronic storage is 100% secure, therefore, we will try to guarantee absolute security.
                </p>
                <br></br>
                <p>
                  <h3>Third-Party Links:</h3>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AiExcel may contain links to third-party websites, tools, or resources. Please be aware that we are not responsible for the privacy practices or content of these external sites. We encourage users to read the privacy policies of any linked websites before providing any personal information.
                </p>
                <h2>Contact Information</h2>
                <p>
                For any inquiries, feedback, or support related to AiExcel, you can reach us using the following contact information:
                </p>
                <h3>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email: aiexcel.customercs@gmail.com <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; C-Phone: 09916980658
                </h3>
                <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our team is dedicated to assisting you with any questions you may have about our web platform, the AI-powered tools and resources we offer, or any other related matters. Whether you are a student seeking assistance or a user with suggestions for improvement, we value your input and look forward to hearing from you.
                </p>
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
                  Although your email and educational level is sent along with your
                  answers, your specific responses will not be connected to you
                  in any way whatsoever. The data collected during the survey
                  will be stored securely on our google forms. Access to the data
                  will be limited to authorized personnel only. We will take all
                  reasonable precautions to protect the information you provide.
                  After your results are added into the final tally, your
                  personal information will be deleted from any records we may have.
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
                        "DISCLAIMER: The following questions will be used for general analytical use only. Although your educational level is sent along with your answers, your specific responses will not be connected to you in any way whatsoever. The data collected during the survey will be stored securely on our servers. Access to the data will be limited to authorized personnel only. We will take all reasonable precautions to protect the information you provide. After your results are added into the final tally, your personal info will be deleted from any records we may have."
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
