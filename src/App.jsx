import "./App.css";
import Parallax from "./components/Parallax";
import TextBlock from "./components/Textblock";

function App() {
  return <LandingPage />;
}

function LandingPage() {
  return (
    <div>
      <Parallax />
      <TextBlock />
    </div>
  );
}

export default App;
