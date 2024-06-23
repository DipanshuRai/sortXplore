import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [arraySize, setArraySize] = useState(50);
  const [divSizes, setDivSizes] = useState([]);
  const [divs, setDivs] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [speed, setSpeed] = useState(1000);
  const [cDelay, setCDelay] = useState(0);

  useEffect(() => {
    generateArray();
  }, [arraySize]);

  useEffect(() => {
    const delayTime = 10000 / (Math.floor(arraySize / 10) * speed);
    setCDelay(delayTime);
  }, [arraySize, speed]);

  const generateArray = () => {
    const newDivSizes = [];
    const newDivs = [];+
    for (let i = 0; i < arraySize; i++) {
      newDivSizes[i] = Math.floor(Math.random() * 0.8 * (100 - 1));
      newDivs.push(
        <div
          key={i}
          style={{
            margin: '0% 0.1%',
            backgroundColor: 'blue',
            width: `${100 / arraySize - 2 * 0.1}%`,
            height: `${newDivSizes[i]}%`
          }}
        ></div>
      );
    }
    setDivSizes(newDivSizes);
    setDivs(newDivs);
  };

  const updateArraySize = (e) => {
    setArraySize(Number(e.target.value));
  };

  const vis_speed = (e) => {
    const array_speed = parseInt(e.target.value);
    switch (array_speed) {
      case 1:
        setSpeed(1);
        break;
      case 2:
        setSpeed(10);
        break;
      case 3:
        setSpeed(100);
        break;
      case 4:
        setSpeed(1000);
        break;
      case 5:
        setSpeed(10000);
        break;
      default:
        break;
    }
  };

  const disableButtons = () => {
    setIsDisabled(true);
  };

  const runAlgo = (algo) => {
    disableButtons();
    switch (algo) {
      case 'Bubble':
        Bubble();
        break;
      case 'Selection':
        SelectionSort();
        break;
      case 'Insertion':
        Insertion();
        break;
      case 'Merge':
        Merge();
        break;
      case 'Quick':
        Quick();
        break;
      case 'Heap':
        Heap();
        break;
      default:
        break;
    }
  };

  const Bubble = () => {
    // Implement Bubble sort
  };

  const SelectionSort = () => {
    // Implement Selection sort
  };

  const Insertion = () => {
    // Implement Insertion sort
  };

  const Merge = () => {
    // Implement Merge sort
  };

  const Quick = () => {
    // Implement Quick sort
  };

  const Heap = () => {
    // Implement Heap sort
  };

  return (
    <>
      <div className="header">
        <div className="title">Sorting Visualizer</div>
        <div className="parameter">
          <div className='sub-parameter'>
            <p>Array Size :</p>
            <input type="range" id="arr_size" min="0" max="100" value={arraySize} onChange={updateArraySize} disabled={isDisabled} />
          </div>
          <div className='sub-parameter'>
            <p>Algorithm Speed :</p>
            <input type="range" id="algo_speed" min="0" max="100" value={speed} onChange={vis_speed} disabled={isDisabled} />
          </div>
          <button className="button" onClick={generateArray} disabled={isDisabled}>Generate Array</button>
        </div>
      </div>
      <div className="algo">
        <div className="button" onClick={() => runAlgo('Selection')} disabled={isDisabled}>Selection</div>
        <div className="button" onClick={() => runAlgo('Bubble')} disabled={isDisabled}>Bubble</div>
        <div className="button" onClick={() => runAlgo('Insertion')} disabled={isDisabled}>Insertion</div>
        <div className="button" onClick={() => runAlgo('Quick')} disabled={isDisabled}>Quick</div>
        <div className="button" onClick={() => runAlgo('Merge')} disabled={isDisabled}>Merge</div>
        <div className="button" onClick={() => runAlgo('Heap')} disabled={isDisabled}>Heap</div>
      </div>
      <div className="main">
        <div id="time">
          <h3>TIME COMPLEXITY</h3>
          <div className="time-complexity" id="time-complexity-id">
            <div className="cases">
              <p className="Sub_Heading">Worst case:</p>
              <p id="Time_Worst"></p>
            </div>
            <div className="cases">
              <p className="Sub_Heading">Average case:</p>
              <p id="Time_Average"></p>
            </div>
            <div className="cases">
              <p className="Sub_Heading">Best case:</p>
              <p id="Time_Best"></p>
            </div>
          </div>
        </div>
        <div id="array_container">
          {divs}
        </div>
        <div id="space">
          <h3>SPACE COMPLEXITY</h3>
          <div className="space-complexity" id="space-complexity-id">
            <div className="cases">
              <p className="Sub_Heading">Worst case:</p>
              <p id="Space_Worst"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
