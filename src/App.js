import React, { useState } from 'react';
import 'mind-ar/dist/mindar-image.prod.js';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';
import './App.css';
import MindARViewer from './mindar-viewer';
import multiTarget from './multi-target';
import 'mind-ar/dist/mindar-image-three.prod.js';

function App() {
  const [started, setStarted] = useState(false);
/*const [click_type, setClickType]=useState("");*/
  return (
    <div className="App">
      <h1>Example React component with <a href="https://github.com/hiukim/mind-ar-js" target="blank">MindAR</a></h1>

      <div>
	{!started && <button onClick={() => {setStarted(true)}}>Start Image Tracking</button>}
	{started && <button onClick={() => {setStarted(false)}}>Stop Image Tracking</button>}

  {!started && <button onClick={() => {setStarted(true)}}>Start Multi-Target</button>}
	{started && <button onClick={() => {setStarted(false)}}>Stop Multi-Target</button>}
      </div>

      {started === true && (
	<div className="container">
	  <MindARViewer/>
   
	</div>

      )}

{started === true && (
<div className="container">
	  <multiTarget/>
  
	</div>
)}
    </div>
  );
}

export default App;
