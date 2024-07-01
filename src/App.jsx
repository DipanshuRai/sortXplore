import React, { useState, useEffect } from 'react';
import SelectionSort from './Algorithms/Selection';
import './App.css';

function App() {
  const [arraySize, setArraySize] = useState(30);
  const [algoSpeed, setAlgoSpeed] = useState(3);
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  const updateArraySize = (e) => {
    setArraySize(Number(e.target.value));
    resetArrayBarColors();
  };

  const updateAlgoSpeed = (e) => {
    setAlgoSpeed(Number(e.target.value));
    resetArrayBarColors();
  };

  const generateNewArray = () => {
    const newArray = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 500) + 5);
    setArray(newArray);
    resetArrayBarColors();
  };

  const resetArrayBarColors = () => {
    const bars = document.getElementsByClassName('array-bar');
    for (let bar of bars) {
      bar.style.backgroundColor = 'blue';
    }
  };

  useEffect(() => {
    generateNewArray();
  }, [arraySize]);

  useEffect(() => {
    if (!isSorting) {
      resetArrayBarColors();
    }
  }, [isSorting]);

  return (
    <div className="container">
      <div className="header">
        <div className="title">Sorting Visualizer</div>
        <div className="parameter">
          <div className="sub-parameter">
            <div className="para">
              <p>Array Size ({arraySize}) :</p>
              <input
                type="range"
                id="arr_size"
                min="10"
                max="150"
                value={arraySize}
                onChange={updateArraySize}
                disabled={isSorting}
              />
            </div>
            <div className="para">
              <p>Algorithm Speed ({algoSpeed}) :</p>
              <input
                type="range"
                id="algo_speed"
                min="0"
                max="5"
                value={algoSpeed}
                onChange={updateAlgoSpeed}
                disabled={isSorting}
              />
            </div>
          </div>
          <button className="button" onClick={generateNewArray} disabled={isSorting}>Generate Array</button>
        </div>
      </div>
      <div className="algo">
        <div className="button" onClick={() => !isSorting && setIsSorting(true)}>Selection</div>
        {/* <div className="button" onClick={Bubble}>Bubble</div>
        <div className="button" onClick={Insertionn}>Insertion</div>
        <div className="button" onClick={Quick}>Quick</div>
        <div className="button" onClick={Merge}>Merge</div>
        <div className="button" onClick={Heap}>Heap</div> */}
      </div>
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
        <div className="array-container" id="array_container">
          {array.map((value, index) => (
            <div
              key={index}
              className="array-bar"
              style={{
                height: `${value}px`,
                width: `${100 / arraySize}%`,
                backgroundColor: 'blue'
              }}
            >
            </div>
          ))}
        </div>
      </div>
      {isSorting && <SelectionSort array={array} setArray={setArray} algoSpeed={algoSpeed} setIsSorting={setIsSorting} />}
    </div>
  );
}

export default App;