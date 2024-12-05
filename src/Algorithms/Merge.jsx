import { useState, useEffect, useRef } from 'react';

const MergeSort = ({ array, setArray, algoSpeed, setIsSorting, isSorting }) => {

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
        document.getElementById("stable").innerHTML = ": Stable";
        document.getElementById("inplace").innerHTML = ": Not Inplace";
        document.getElementById("Time_Worst").innerHTML = ": O(NlogN)";
        document.getElementById("Time_Average").innerHTML = ": Θ(NlogN)";
        document.getElementById("Time_Best").innerHTML = ": Ω(NlogN)";
        document.getElementById("Space_Worst").innerHTML = ": O(N)";
    }, []);

    useEffect(() => {
        if (!isSorting) return; // Do nothing if not sorting

        isCancelled.current = false;

        const merge = async (arr, low, mid, high) => {
            if (isCancelled.current) return;

            const n1 = mid - low + 1;
            const n2 = high - mid;
            const left = new Array(n1);
            const right = new Array(n2);

            for (let i = 0; i < n1; i++) 
                left[i] = arr[low + i];
            
            for (let j = 0; j < n2; j++) 
                right[j] = arr[mid + 1 + j];
            
            for(let i=low; i<=high; i++)
                updateColor(i,"#E34234"); // red

            await delay(algoSpeed);

            let i = 0, j = 0, k = low;
            while (i < n1 && j < n2) {
                if (isCancelled.current) return;

                setComparisons((prev) => prev + 1); 
                if (left[i] <= right[j]) {
                    arr[k] = left[i];
                    updateColor(k, '#50C878'); // green
                    i++;
                } else {
                    arr[k] = right[j];
                    updateColor(k, '#50C878');
                    j++;
                }
                setSwaps((prev) => prev + 1); // Count assignments as swaps
                setArray([...arr]);
                await delay(algoSpeed);
                k++;
            }

            while (i < n1) {
                if (isCancelled.current) return;

                setSwaps((prev) => prev + 1);
                arr[k] = left[i];
                updateColor(k, '#50C878');
                setArray([...arr]);
                await delay(algoSpeed);
                i++;
                k++;
            }

            while (j < n2) {
                if (isCancelled.current) return;

                setSwaps((prev) => prev + 1);
                arr[k] = right[j];
                updateColor(k, '#50C878');
                setArray([...arr]);
                await delay(algoSpeed);
                j++;
                k++;
            }
        }

        const mergeSortHelper = async (arr, low, high) => {
            if (low < high) {
                if (isCancelled.current) return;

                const mid = Math.floor((low + high) / 2);
                await delay(algoSpeed);
                updateColor(mid,"#D5E334"); // yellow
                await mergeSortHelper(arr, low, mid);
                await mergeSortHelper(arr, mid + 1, high);
                await merge(arr, low, mid, high);
            }
        };

        const mergeSort = async () => {
            const n = array.length;
            const arrayCopy = [...array];
            await mergeSortHelper(arrayCopy, 0, n - 1);
            // setIsSorting(false);
            if (!isCancelled.current) {
                setIsSorting(false); // Only set sorting to false if not cancelled
            }
        };
        const runSort = async () => {
            await mergeSort();
        };

        runSort();
        return () => {
            isCancelled.current = true; // Cancel sorting on cleanup
        };
    }, [setArray, setIsSorting]);
    return null;
};

export default MergeSort;