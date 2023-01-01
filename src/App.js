import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [modeText, setModeText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      setModeText('Disable Dark Mode');
      showAlert('Dark Mode has been enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing mode'
      // }, 1000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now'
      // }, 1200);

    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      setModeText('Enable Dark Mode');
      showAlert('Light Mode has been enabled', 'success');
      document.title = 'TextUtils';
    }
  }

  const showAlert = (message, type) => {
    setAlert({
        message: message,
        type: type,
        show: 'show'
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" homeText="Home" aboutText="About" modeTitle={modeText} mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
        <Routes>
          <Route exact path='/' element={<TextForm heading="Enter the text to analyse" showAlert={showAlert} />} >
          </Route>
          <Route exact path='/about' element={<About />}>
          </Route>
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
