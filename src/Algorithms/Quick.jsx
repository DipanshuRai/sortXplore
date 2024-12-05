import { useState, useEffect, useRef } from 'react';

const QuickSort = ({ array, setArray, algoSpeed, setIsSorting, isSorting }) => {

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
        document.getElementById("Time_Average").innerHTML = ": Θ(NlogN)";
        document.getElementById("Time_Best").innerHTML = ": Ω(N)";
        document.getElementById("Space_Worst").innerHTML = ": O(1)";
    }, []);

    useEffect(() => {
        if (!isSorting) return; // Do nothing if not sorting

        isCancelled.current = false; // Reset cancellation flag

        const partition = async (arr, low, high) => {
            if (isCancelled.current) return -1;

            let pivot = arr[low];
            // await delay(algoSpeed);
            let i = low;
            let j = high;
            while (i < j) {
                while (i < high && arr[i] <= pivot) {
                    if (isCancelled.current) return -1;

                    setComparisons((prev) => prev + 1);
                    if (i == low)
                        updateColor(i, "#E34234"); // red
                    else
                        updateColor(i, "#D5E334"); // yellow
                    await delay(algoSpeed);
                    i++;
                    if (i - 1 != low)
                        updateColor(i - 1, "rgba(26, 53, 177, 0.888)"); // blue
                }
                updateColor(i, "#D5E334");
                await delay(algoSpeed);
                while (j > low && arr[j] > pivot) {
                    if (isCancelled.current) return -1;

                    setComparisons((prev) => prev + 1);
                    updateColor(j, "#D5E334");
                    await delay(algoSpeed);
                    j--;
                    if (j + 1 != i)
                        updateColor(j + 1, "rgba(26, 53, 177, 0.888)"); 
                }
                updateColor(j, "#D5E334"); // yellow
                await delay(algoSpeed);
                if (i < j){
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    setSwaps((prev) => prev + 1);
                    setArray([...arr]);
                    await delay(algoSpeed);
                    updateColor(i, "rgba(26, 53, 177, 0.888)");
                    updateColor(j, "rgba(26, 53, 177, 0.888)");
                    await delay(algoSpeed);
                }
            }
            [arr[low], arr[j]] = [arr[j], arr[low]];
            setSwaps((prev) => prev + 1);
            updateColor(low, "rgba(26, 53, 177, 0.888)");
            updateColor(j, "#50C878"); // green
            setArray([...arr]);
            return j;
        }

        const quickSortHelper = async (arr, low, high) => {
            if (low < high) {
                if (isCancelled.current) return;

                let pi = await partition(arr, low, high);
                await quickSortHelper(arr, low, pi - 1);
                for (let i = low; i < pi; i++)
                    updateColor(i, "#50C878");
                await quickSortHelper(arr, pi + 1, high);
            }
        };

        const quickSort = async () => {
            const n = array.length;
            const arrayCopy = [...array];
            await quickSortHelper(arrayCopy, 0, n - 1);
            if (!isCancelled.current) {
                updateColor(n - 1, "#50C878");
                setIsSorting(false); // Only set to false if not cancelled
            }
        };
        
        const runSort = async () => {
            await quickSort();
        };

        runSort();
        return () => {
            isCancelled.current = true; // Cancel sorting on cleanup
        };
    }, [setArray, setIsSorting]);
    return null;
};

export default QuickSort;