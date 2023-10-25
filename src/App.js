import './App.css';
import { useEffect } from 'react';
import Cursor from './components/Cursor';

function App() {

  // useEffect(() => {
  //   const videoElement = document.getElementById('video');
  //   const videoSource = 'http://localhost:8000/'; 

  //   videoElement.src = videoSource;
  // }, []);

  return (
    <div>
      {/* <video id="video" controls autoPlay preload="metadata" width="640" height="360"></video> */}
      <Cursor/>
    </div>
  );
}

export default App;
