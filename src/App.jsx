import { useState } from 'react';
import './App.css';

function App() {

  const[arraySize,setArraySize]=useState(30);
  const[algoSpeed,setAlgoSpeed]=useState(3);

  const updateArraySize=(e)=>{
    setArraySize(Number(e.target.value));
  };

  const updateAlgoSpeed=(e)=>{
    setAlgoSpeed(Number(e.target.value));
  };

  return (
    <div className="container">
      <div className="header">
        <div className="title">Sorting Visualizer</div>
        <div className="parameter">
          <div className="sub-parameter">
            <div className="para">
              <p>Array Size ({arraySize}) :</p>
              <input type="range" id="arr_size" min="0" max="150" value={arraySize} onChange={updateArraySize}/>
            </div>
            <div className="para">
              <p>Algorithm Speed ({algoSpeed}) :</p>
              <input type="range" id="algo_speed" min="0" max="5" value={algoSpeed} onChange={updateAlgoSpeed} />
            </div>
          </div>
          <button className="button">Generate Array</button>
        </div>
      </div>
      <div className="algo">
        <div className="button" >Selection</div>
        <div className="button" >Bubble</div>
        <div className="button" >Insertion</div>
        <div className="button" >Quick</div>
        <div className="button" >Merge</div>
        <div className="button" >Heap</div>
      </div >
      <div className="main">
        <div id="complexity">
          <h3>TIME COMPLEXITY</h3>
          <div className="time-complexity" id="time-complexity-id">
            <div className="cases">
              <p className="Sub_Heading">Worst case :</p>
              <p id="Time_Worst"></p>
            </div>
            <div className="cases">
              <p className="Sub_Heading">Average case :</p>
              <p id="Time_Average"></p>
            </div>
            <div className="cases">
              <p className="Sub_Heading">Best case :</p>
              <p id="Time_Best"></p>
            </div>
          </div>
          <h3>SPACE COMPLEXITY</h3>
          <div className="space-complexity" id="space-complexity-id">
            <div className="cases">
              <p className="Sub_Heading">Worst case :</p>
              <p id="Space_Worst"></p>
            </div>
          </div>
        </div>
        <div id="array_container">

          
        </div>
      </div>
    </div>
  );
}

export default App;