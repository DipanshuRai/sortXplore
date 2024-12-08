import { useState, useEffect, useRef } from 'react';

const InsertionSort = ({ array, setArray, algoSpeed, setIsSorting, isSorting }) => {

    const [comparisons, setComparisons] = useState(0);
    const [swaps, setSwaps] = useState(0);
    const isCancelled = useRef(false);

    const updateColor=(index,color)=>{
        document.getElementsByClassName('array-bar')[index].style.backgroundColor = color;
    }

    const delay = (algoSpeed) => {
        // Map algoSpeed (1-10) to a delay range using an exponential scale
        const maxDelay = 1000; // Maximum delay (in ms) for the slowest speed
        const minDelay = 10;   // Minimum delay (in ms) for the fastest speed
    
        const adjustedDelay = maxDelay / Math.pow(2, algoSpeed - 1);
    
        // Ensure delay doesn't go below the minimum
        return new Promise((resolve) => setTimeout(resolve, Math.max(adjustedDelay, minDelay)));
    };

    useEffect(() => {
        document.getElementById("comparisions").innerHTML = `: ${comparisons}`;
        document.getElementById("swaps").innerHTML = `: ${swaps}`;
    }, [comparisons, swaps]);

    useEffect(() => {
        document.getElementById("stable").innerHTML = ": Stable";
        document.getElementById("inplace").innerHTML = ": Inplace";
        document.getElementById("Time_Worst").innerHTML = ": O(N<sup>2</sup>)";
        document.getElementById("Time_Average").innerHTML = ": Θ(N<sup>2</sup>)";
        document.getElementById("Time_Best").innerHTML = ": Ω(N)";
        document.getElementById("Space_Worst").innerHTML = ": O(1)";
    }, []);

    useEffect(() => {
        if (!isSorting) return; // Do nothing if not sorting

        isCancelled.current = false; // Reset cancellation flag

        const insertionSort = async () => {
            const n = array.length;
            const arrayCopy = [...array];

            for(let i=0; i<n; i++){
                if (isCancelled.current) return;

                updateColor(i,"#D5E334") // yellow
                await delay(algoSpeed);
                let j=i;
                if(j>0 && arrayCopy[j]>=arrayCopy[j-1])
                    setComparisons(prev=>prev+1);
                while(j>0 && arrayCopy[j]<arrayCopy[j-1]){
                    if (isCancelled.current) return;

                    updateColor(j,"#E34234"); // red
                    updateColor(j-1,"#E34234");
                    await delay(algoSpeed);
                    setComparisons(prev=>prev+1);
                    setSwaps(prev=>prev+0.5);
                    [arrayCopy[j], arrayCopy[j-1]] = [arrayCopy[j-1], arrayCopy[j]];
                    setArray([...arrayCopy]);
                    updateColor(j,"#50C878"); // green
                    j--;
                }
                updateColor(j,"#50C878");
            }
            setIsSorting(false);
        };
        const runSort = async () => {
            await insertionSort();
        };

        runSort();
        return () => {
            isCancelled.current = true; // Cancel sorting on cleanup
        };
    }, [setArray, setIsSorting]);
    return null;
};

export default InsertionSort;