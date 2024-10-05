import React, { useState, useEffect } from 'react';
import SelectionSort from './Algorithms/Selection';
import BubbleSort from './Algorithms/Bubble';
import InsertionSort from './Algorithms/Insertion';
import QuickSort from './Algorithms/Quick';
import MergeSort from './Algorithms/Merge';
import './App.css';

const algorithms = {
  selection: SelectionSort,
  bubble: BubbleSort,
  insertion: InsertionSort,
  quick: QuickSort,
  merge: MergeSort,
};

const SortingAlgorithms = ({ array, setArray, algoSpeed, setIsSorting, isSorting, selectedAlgo }) => {
  const AlgoComponent = algorithms[selectedAlgo];

  return (
    <>
      {isSorting && AlgoComponent && (
        <AlgoComponent
          array={array}
          setArray={setArray}
          algoSpeed={algoSpeed}
          setIsSorting={setIsSorting}
        />
      )}
    </>
  );
};

function App() {
  const [arraySize, setArraySize] = useState(30);
  const [algoSpeed, setAlgoSpeed] = useState(7);
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [selectedAlgo, setSelectedAlgo] = useState(null);

  const updateArraySize = (e) => {
    setArraySize(Number(e.target.value));
    resetArrayBarColors();
  };

  const updateAlgoSpeed = (e) => {
    setAlgoSpeed(Number(e.target.value));
    resetArrayBarColors();
  };

  // Generate array of random length
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

  const selectAlgorithm = (algo) => {
    if (!isSorting) {
      setIsSorting(true);
      setSelectedAlgo(algo);
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
  console.log({isSorting});

  return (
    <div className="container">
      <div className="header">
        <div className="title">Sorting Visualizer</div>
        <div className="parameter">
          <div className="sub-parameter">
            <div className="para">
              <p className='size'>Array Size ({arraySize}) :</p>
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
              <p className='speed'>Algorithm Speed ({algoSpeed}) :</p>
              <input
                type="range"
                id="algo_speed"
                min="1"
                max="10"
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
        {Object.keys(algorithms).map((algo) => (
          <div
            key={algo}
            onClick={() => selectAlgorithm(algo)}
            className={`algo-button ${isSorting && selectedAlgo === algo ? 'active' : ''}`}
          >
            {algo.charAt(0).toUpperCase() + algo.slice(1)}
          </div>
        ))}
      </div>

      <div className="main">
        <div className="array-container">
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

        <div className="complexity">
          <h2 className='heading'>TIME COMPLEXITY</h2>
          <div className="time-complexity">
            <div className="cases">
              <p className="sub-heading">Worst Case :</p>
              <p id="Time_Worst"></p>
            </div>
            <div className="cases">
              <p className="sub-heading">Average Case :</p>
              <p id="Time_Average"></p>
            </div>
            <div className="cases">
              <p className="sub-heading">Best Case :</p>
              <p id="Time_Best"></p>
            </div>
          </div>
          <h2 className='heading'>SPACE COMPLEXITY</h2>
          <div className="space-complexity">
            <div className="cases">
              <p className="sub-heading">Worst Case :</p>
              <p id="Space_Worst"></p>
            </div>
          </div>
        </div>

        <SortingAlgorithms
          array={array}
          setArray={setArray}
          algoSpeed={algoSpeed}
          setIsSorting={setIsSorting}
          isSorting={isSorting}
          selectedAlgo={selectedAlgo}
        />

      </div>
    </div>
  );
}

export default App;