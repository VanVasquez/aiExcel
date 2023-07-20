import "./App.css";
import Parallax from "./components/Parallax";
import TextBlock from "./components/Textblock";

function App() {
  return <LandingPage />;
}

function LandingPage() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Parallax />
      <TextBlock />{" "}
      <div 
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
      >
        <button onClick={() => scrollToTop()} className="btn btn-light" style={{color: '#1EBBD7', fontWeight: 900, fontSize: 24}}>
          BACK TO TOP ▲
        </button>
      </div>
    </div>
  );
}

export default App;
