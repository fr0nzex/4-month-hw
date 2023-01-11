
import './App.css';

function AboutPage () {
  return (
    <div>
      <h1>AboutPage</h1>
      <Footer/>
      <Header/>
    </div>
    
  )
}

function Footer() {
  return(
    <div>
      <p>Я footer</p>
      
    </div>
  )
}

function Header() {
  return(
    <div>
      <p>i am header</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <AboutPage/>
    </div>
  );
}

export default App;
