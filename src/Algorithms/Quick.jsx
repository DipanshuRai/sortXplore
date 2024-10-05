import { useEffect } from 'react';

const QuickSort = ({ array, setArray, algoSpeed, setIsSorting }) => {

    const updateColor = (index, color) => {
        document.getElementsByClassName('array-bar')[index].style.backgroundColor = color;
    }

    const delay = (algoSpeed) => {
        return new Promise((resolve) => setTimeout(resolve, (10 - algoSpeed) * 100));
    };

    useEffect(() => {
        document.getElementById("Time_Worst").innerHTML = "O(n<sup>2</sup>)";
        document.getElementById("Time_Average").innerHTML = "Θ(nlogn)";
        document.getElementById("Time_Best").innerHTML= "Ω(n)";
        document.getElementById("Space_Worst").innerHTML = "O(1)";

        const partition = async (arr, low, high) => {
            let pivot = arr[low];
            await delay(algoSpeed);
            let i = low;
            let j = high;
            while (i < j) {
                while (i < high && arr[i] <= pivot) {
                    if (i == low)
                        updateColor(i, "red");
                    else
                        updateColor(i, "yellow");
                    await delay(algoSpeed);
                    i++;
                    if (i - 1 != low)
                        updateColor(i - 1, "blue");
                }
                updateColor(i, "yellow");
                await delay(algoSpeed);
                while (j > low && arr[j] > pivot) {
                    updateColor(j, "yellow");
                    await delay(algoSpeed);
                    j--;
                    if (j + 1 != i)
                        updateColor(j + 1, "blue");
                }
                updateColor(j, "yellow");
                await delay(algoSpeed);
                if (i < j)
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                setArray([...arr]);
                await delay(algoSpeed);
                updateColor(i, "blue");
                updateColor(j, "blue");
                await delay(algoSpeed);
            }
            [arr[low], arr[j]] = [arr[j], arr[low]];
            updateColor(low, "blue");
            updateColor(j, "green");
            setArray([...arr]);
            return j;
        }

        const quickSortHelper = async (arr, low, high) => {
            if (low < high) {
                let pi = await partition(arr, low, high);
                await quickSortHelper(arr, low, pi - 1);
                for (let i = low; i < pi; i++)
                    updateColor(i, "green");
                await quickSortHelper(arr, pi + 1, high);
            }
        };

        const quickSort = async () => {
            const n = array.length;
            const arrayCopy = [...array];
            await quickSortHelper(arrayCopy, 0, n - 1);
            updateColor(n - 1, "green");
            setIsSorting(false);
        };
        quickSort();
        return () => setIsSorting(false);
    }, [array, setArray, algoSpeed, setIsSorting]);
    return null;
};

export default QuickSort;