import './App.css'
import Parallax from './components/Parallax'
import TextBlock from './components/Textblock'

function App() {
  return (
    <div style={{height: '1000px'}}>  
      <LandingPage/>
    </div>
  )
}

function LandingPage() {
  return (
    <div>
      <Parallax/>
      <TextBlock/>
    </div>
  )
}

export default App
