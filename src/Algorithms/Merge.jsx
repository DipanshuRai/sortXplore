import { useEffect } from 'react';

const MergeSort = ({ array, setArray, algoSpeed, setIsSorting }) => {

    const updateColor = (index, color) => {
        document.getElementsByClassName('array-bar')[index].style.backgroundColor = color;
    }

    useEffect(() => {
        document.getElementById("Time_Worst").innerText = "O(NlogN)";
        document.getElementById("Time_Average").innerText = "Θ(NlogN)";
        document.getElementById("Time_Best").innerText = "Ω(NlogN)";
        document.getElementById("Space_Worst").innerText = "O(N)";

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
            await new Promise(resolve => setTimeout(resolve, (10 - algoSpeed) * 100));

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
                await new Promise(resolve => setTimeout(resolve, (10 - algoSpeed) * 100));
                k++;
            }

            while (i < n1) {
                arr[k] = left[i];
                updateColor(k, 'green');
                setArray([...arr]);
                await new Promise(resolve => setTimeout(resolve, (10 - algoSpeed) * 100));
                i++;
                k++;
            }

            while (j < n2) {
                arr[k] = right[j];
                updateColor(k, 'green');
                setArray([...arr]);
                await new Promise(resolve => setTimeout(resolve, (10 - algoSpeed) * 100));
                j++;
                k++;
            }
        }

        const mergeSortHelper = async (arr, low, high) => {
            if (low < high) {
                const mid = Math.floor((low + high) / 2);
                await new Promise(resolve => setTimeout(resolve, (10 - algoSpeed) * 100));
                updateColor(mid,"yellow");
                await mergeSortHelper(arr, low, mid);
                await mergeSortHelper(arr, mid + 1, high);
                await merge(arr, low, mid, high);
            }
        };

        const mergeSort = async () => {
            const n = array.length;
            const arrayCopy = [...array];
            await mergeSortHelper(arrayCopy, 0, n - 1);
            setIsSorting(false);
        };
        mergeSort();
        return () => setIsSorting(false);
    }, [array, setArray, algoSpeed, setIsSorting]);
    return null;
};

export default MergeSort;