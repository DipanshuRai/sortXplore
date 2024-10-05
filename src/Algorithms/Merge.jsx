import { useEffect } from 'react';

const MergeSort = ({ array, setArray, algoSpeed, setIsSorting }) => {

    const updateColor = (index, color) => {
        document.getElementsByClassName('array-bar')[index].style.backgroundColor = color;
    }

    const delay = (algoSpeed) => {
        return new Promise((resolve) => setTimeout(resolve, (10 - algoSpeed) * 100));
    };

    useEffect(() => {
        document.getElementById("Time_Worst").innerHTML = "O(nlogn)";
        document.getElementById("Time_Average").innerHTML = "Θ(nlogn)";
        document.getElementById("Time_Best").innerHTML = "Ω(nlogn)";
        document.getElementById("Space_Worst").innerHTML = "O(n)";

        const merge = async (arr, low, mid, high) => {
            const n1 = mid - low + 1;
            const n2 = high - mid;
            const left = new Array(n1);
            const right = new Array(n2);

            for (let i = 0; i < n1; i++) {
                left[i] = arr[low + i];

            }
            for (let j = 0; j < n2; j++) {
                right[j] = arr[mid + 1 + j];
            }
            for(let i=low; i<=high; i++)
                updateColor(i,"red");
            await delay(algoSpeed);

            let i = 0, j = 0, k = low;
            while (i < n1 && j < n2) {
                if (left[i] <= right[j]) {
                    arr[k] = left[i];
                    updateColor(k, 'green');
                    i++;
                } else {
                    arr[k] = right[j];
                    updateColor(k, 'green');
                    j++;
                }
                setArray([...arr]);
                await delay(algoSpeed);
                k++;
            }

            while (i < n1) {
                arr[k] = left[i];
                updateColor(k, 'green');
                setArray([...arr]);
                await delay(algoSpeed);
                i++;
                k++;
            }

            while (j < n2) {
                arr[k] = right[j];
                updateColor(k, 'green');
                setArray([...arr]);
                await delay(algoSpeed);
                j++;
                k++;
            }
        }

        const mergeSortHelper = async (arr, low, high) => {
            if (low < high) {
                const mid = Math.floor((low + high) / 2);
                await delay(algoSpeed);
                updateColor(mid,"yellow");
                await mergeSortHelper(arr, low, mid);
                await mergeSortHelper(arr, mid + 1, high);
                await merge(arr, low, mid, high);
            }
        };

        const mergeSort = async () => {
            const n = array.length;
            const arrayCopy = [...array];
            // setIsSorting(true);
            await mergeSortHelper(arrayCopy, 0, n - 1);
            setIsSorting(false);
        };
        mergeSort();
        return () => setIsSorting(false);
    }, [array, setArray, algoSpeed, setIsSorting]);
    return null;
};

export default MergeSort;