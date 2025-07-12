import './App.css'
import logo from './assets/logo.svg';
import Root from './root';

function App() {
 
  return (
    <div className='container'>
      <img src={logo} alt="AirCnC" />
      <div className='content'>
        <Root />
      </div>
    </div>
  )
}

export default App
