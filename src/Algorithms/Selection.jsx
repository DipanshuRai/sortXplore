import { useState, useEffect, useRef } from 'react';

const SelectionSort = ({ array, setArray, algoSpeed, setIsSorting, isSorting }) => {

    const [comparisons, setComparisons] = useState(0);
    const [swaps, setSwaps] = useState(0);
    const isCancelled = useRef(false);

    const updateColor = (index, color) => {
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
        document.getElementById("stable").innerHTML = ": Not Stable";
        document.getElementById("inplace").innerHTML = ": Inplace";
        document.getElementById("Time_Worst").innerHTML = ": O(N<sup>2</sup>)";
        document.getElementById("Time_Average").innerHTML = ": Θ(N<sup>2</sup>)";
        document.getElementById("Time_Best").innerHTML = ": Ω(N<sup>2</sup>)";
        document.getElementById("Space_Worst").innerHTML = ": O(1)";
    }, []);

    useEffect(() => {
        if (!isSorting) return; // Do nothing if not sorting

        isCancelled.current = false; // Reset cancellation flag

        const selectionSort = async () => {
            const n = array.length;
            const arrayCopy = [...array];

            for (let i = 0; i < n - 1; i++) {
                if (isCancelled.current) return;

                await delay(algoSpeed);
                updateColor(i, "#E34234"); // red
                let minIndex = i;

                for (let j = i + 1; j < n; j++) {
                    if (isCancelled.current) return;

                    updateColor(j, "#D5E334"); // yellow
                    await delay(algoSpeed);
                    setComparisons(prev => prev + 0.5);
                    if (arrayCopy[j] < arrayCopy[minIndex]) {
                        if (minIndex !== i)
                            updateColor(minIndex, "rgba(26, 53, 177, 0.888)"); // blue
                        minIndex = j;
                        updateColor(minIndex, "#E34234");
                    }
                    else
                        updateColor(j, "rgba(26, 53, 177, 0.888)");
                }
                if (minIndex !== i) {
                    [arrayCopy[i], arrayCopy[minIndex]] = [arrayCopy[minIndex], arrayCopy[i]];
                    setArray([...arrayCopy]);
                    setSwaps(prev => prev + 0.5);
                }
                updateColor(minIndex, "rgba(26, 53, 177, 0.888)");
                updateColor(i, "#50C878"); // green
            }
            updateColor(n - 1, "#50C878");

            setIsSorting(false);
        };

        const runSort = async () => {
            await selectionSort();
        };

        runSort();
        return () => {
            isCancelled.current = true; // Cancel sorting on cleanup
        };
    }, [setArray, setIsSorting]);

    return null;
};

export default SelectionSort;