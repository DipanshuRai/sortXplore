import { useState, useEffect } from 'react';

const SelectionSort = ({ array, setArray, algoSpeed, setIsSorting }) => {

    const [timeTaken, setTimeTaken]=useState(0);
    const [memoryUsed, setMemoryUsed]=useState(0);

    const updateColor=(index,color)=>{
        document.getElementsByClassName('array-bar')[index].style.backgroundColor = color;
    }

    const delay = (algoSpeed) => {
        return new Promise((resolve) => setTimeout(resolve, (10 - algoSpeed) * 100));
    };

    let startTime=0;
    let endTime=0;
    useEffect(()=>{
        // document.getElementById("time-taken").innerHTML = `${(startTime )} ms`;
        // document.getElementById("memory-used").innerHTML = `${(endTime)} ms`;
        // document.getElementById("time-taken").innerHTML = `${(endTime-startTime / 1000).toFixed(3)} s`;
        // document.getElementById("memory-used").innerHTML = `${memoryUsed.toFixed(3)} MB`;
    },[timeTaken]);

    useEffect(() => {
        document.getElementById("Time_Worst").innerHTML = "O(N<sup>2</sup>)";
        document.getElementById("Time_Average").innerHTML = "Θ(N<sup>2</sup>)";
        document.getElementById("Time_Best").innerHTML = "Ω(N<sup>2</sup>)";
        document.getElementById("Space_Worst").innerHTML = "O(1)";
    }, []);

    useEffect(() => {

        const selectionSort = async () => {
            startTime = performance.now(); // Start time
            const startMemory = performance.memory ? performance.memory.usedJSHeapSize : 0; // Initial memory usage
            const n = array.length;
            const arrayCopy = [...array];
            for (let i = 0; i < n - 1; i++) {
                await delay(algoSpeed);
                updateColor(i,"red");
                let minIndex = i;
                for (let j = i + 1; j < n; j++) {
                    updateColor(j,"yellow");
                    await delay(algoSpeed);
                    if (arrayCopy[j] < arrayCopy[minIndex]) {
                        if (minIndex !== i)
                            updateColor(minIndex,"blue");
                        minIndex = j;
                        updateColor(minIndex,"red");
                    } 
                    else 
                        updateColor(j,"blue");
                }
                if (minIndex !== i) {
                    [arrayCopy[i], arrayCopy[minIndex]] = [arrayCopy[minIndex], arrayCopy[i]];
                    setArray([...arrayCopy]);
                }
                updateColor(minIndex,"blue");
                updateColor(i,"green");
            }
            updateColor(n-1,"green");

            endTime = performance.now(); // End time
            const endMemory = performance.memory ? performance.memory.usedJSHeapSize : 0; // Final memory usage

            // console.log(timeTaken);
            // setTimeTaken((endTime - startTime)); // Time taken in milliseconds
            // setMemoryUsed((endMemory - startMemory) / (1024 * 1024)); // Memory used in MB
            console.log(endTime-startTime);
            // console.log(endMemory - startMemory);
            // setIsSorting(false);
        };
        selectionSort();
        return () => setIsSorting(false);
    }, [algoSpeed, array, setArray]);
    
    return null;
};

export default SelectionSort;