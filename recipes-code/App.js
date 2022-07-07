import logo from './brewdog-logo.png';
import './App.css';
import Recipes from './Recipes';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} />
        <p className='logo-subheading'>
         This is where you find the unique Brewdog Recipes!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <Recipes/>
    </div>
  );
}

export default App;
