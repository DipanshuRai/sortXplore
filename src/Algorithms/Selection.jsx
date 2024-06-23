// import React, { useEffect, useRef, useCallback } from 'react';

// const SelectionSort = ({ array, setArray, algoSpeed, setIsSorting }) => {

//     useEffect(() => {
//         document.getElementById("Time_Worst").innerText = "O(N^2)";
//         document.getElementById("Time_Average").innerText = "Θ(N^2)";
//         document.getElementById("Time_Best").innerText = "Ω(N^2)";
//         document.getElementById("Space_Worst").innerText = "O(1)";
//     }, []);

//     const divsRef = useRef([]);
//     const isSortingRef = useRef(false);

//     const updateDivStyle = useCallback((index, color) => {
//         if (divsRef.current[index]) {
//             divsRef.current[index].style.backgroundColor = color;
//         }
//     }, []);

//     const selectionSort = useCallback(async () => {
//         if (isSortingRef.current) return;
//         isSortingRef.current = true;

//         const n = array.length;
//         const arrayCopy = [...array];

//         for (let i = 0; i < n; i++) {
//             if (!isSortingRef.current) break;

//             let minIndex = i;
//             updateDivStyle(i, "red");

//             for (let j = i + 1; j < n; j++) {
//                 if (!isSortingRef.current) break;

//                 updateDivStyle(j, "yellow");
//                 await new Promise((resolve) => setTimeout(resolve, (5 - algoSpeed) * 100));

//                 if (arrayCopy[j] < arrayCopy[minIndex]) {
//                     if (minIndex !== i) {
//                         updateDivStyle(minIndex, "blue");
//                     }
//                     minIndex = j;
//                     updateDivStyle(minIndex, "red");
//                 } else {
//                     updateDivStyle(j, "blue");
//                 }
//             }

//             if (minIndex !== i) {
//                 [arrayCopy[i], arrayCopy[minIndex]] = [arrayCopy[minIndex], arrayCopy[i]];
//                 setArray([...arrayCopy]);
//                 updateDivStyle(minIndex, "blue");
//             }
//             updateDivStyle(i, "green");
//             await new Promise((resolve) => setTimeout(resolve, (5 - algoSpeed) * 100));
//         }

//         arrayCopy.forEach((_, idx) => updateDivStyle(idx, "green"));
//         isSortingRef.current = false;
//         setIsSorting(false);  // Reset the sorting state
//     }, [array, setArray, algoSpeed, updateDivStyle, setIsSorting]);

//     useEffect(() => {
//         divsRef.current = Array.from(document.getElementsByClassName('array-bar'));
//         selectionSort();
//         return () => {
//             isSortingRef.current = false;
//         };
//     }, [selectionSort]);

//     return null;
// };

// export default SelectionSort;


// import React, { useEffect, useRef, useCallback } from 'react';

// const SelectionSort = ({ array, setArray, algoSpeed, setIsSorting }) => {

//     useEffect(() => {
//         document.getElementById("Time_Worst").innerText = "O(N^2)";
//         document.getElementById("Time_Average").innerText = "Θ(N^2)";
//         document.getElementById("Time_Best").innerText = "Ω(N^2)";
//         document.getElementById("Space_Worst").innerText = "O(1)";
//     }, []);

//     const divsRef = useRef([]);
//     const isSortingRef = useRef(false);

//     const updateDivStyle = useCallback((index, color) => {
//         if (divsRef.current[index]) {
//             divsRef.current[index].style.backgroundColor = color;
//         }
//     }, []);

//     const selectionSort = useCallback(async () => {
//         if (isSortingRef.current) return;
//         isSortingRef.current = true;

//         const n = array.length;
//         const arrayCopy = [...array];

//         for (let i = 0; i < n - 1; i++) {
//             let minIndex = i;
//             updateDivStyle(i, "red");

//             for (let j = i + 1; j < n; j++) {
//                 updateDivStyle(j, "yellow");
//                 await new Promise((resolve) => setTimeout(resolve, (5 - algoSpeed) * 100));

//                 if (arrayCopy[j] < arrayCopy[minIndex]) {
//                     if (minIndex !== i) {
//                         updateDivStyle(minIndex, "blue");
//                     }
//                     minIndex = j;
//                     updateDivStyle(minIndex, "red");
//                 } else {
//                     updateDivStyle(j, "blue");
//                 }
//             }

//             if (minIndex !== i) {
//                 [arrayCopy[i], arrayCopy[minIndex]] = [arrayCopy[minIndex], arrayCopy[i]];
//                 setArray([...arrayCopy]);
//                 await new Promise((resolve) => setTimeout(resolve, (5 - algoSpeed) * 100));
//             }
//             updateDivStyle(minIndex, "blue");
//             updateDivStyle(i, "green");
//         }

//         arrayCopy.forEach((_, idx) => updateDivStyle(idx, "green"));
//         setIsSorting(false);
//         isSortingRef.current = false;
//     }, [array, setArray, algoSpeed, updateDivStyle, setIsSorting]);

//     useEffect(() => {
//         divsRef.current = Array.from(document.getElementsByClassName('array-bar'));
//         selectionSort();
//         return () => {
//             isSortingRef.current = false;
//         };
//     }, [selectionSort]);

//     return null;
// };

// export default SelectionSort;



import React, { useEffect } from 'react';

const SelectionSort = ({ array, setArray, algoSpeed, setIsSorting }) => {

    useEffect(() => {
        document.getElementById("Time_Worst").innerText = "O(N^2)";
        document.getElementById("Time_Average").innerText = "Θ(N^2)";
        document.getElementById("Time_Best").innerText = "Ω(N^2)";
        document.getElementById("Space_Worst").innerText = "O(1)";

        const selectionSort = async () => {
            const n = array.length;
            const arrayCopy = [...array];

            for (let i = 0; i < n - 1; i++) {
                let minIndex = i;
                document.getElementsByClassName('array-bar')[i].style.backgroundColor = "red";

                for (let j = i + 1; j < n; j++) {
                    document.getElementsByClassName('array-bar')[j].style.backgroundColor = "yellow";
                    await new Promise((resolve) => setTimeout(resolve, (5 - algoSpeed) * 100));

                    if (arrayCopy[j] < arrayCopy[minIndex]) {
                        if (minIndex !== i) {
                            document.getElementsByClassName('array-bar')[minIndex].style.backgroundColor = "blue";
                        }
                        minIndex = j;
                        document.getElementsByClassName('array-bar')[minIndex].style.backgroundColor = "red";
                    } else {
                        document.getElementsByClassName('array-bar')[j].style.backgroundColor = "blue";
                    }
                }

                if (minIndex !== i) {
                    [arrayCopy[i], arrayCopy[minIndex]] = [arrayCopy[minIndex], arrayCopy[i]];
                    setArray([...arrayCopy]);
                    await new Promise((resolve) => setTimeout(resolve, (5 - algoSpeed) * 100));
                }
                document.getElementsByClassName('array-bar')[minIndex].style.backgroundColor = "blue";
                document.getElementsByClassName('array-bar')[i].style.backgroundColor = "green";
            }

            arrayCopy.forEach((_, idx) => {
                document.getElementsByClassName('array-bar')[idx].style.backgroundColor = "green";
            });

            setIsSorting(false);
        };

        selectionSort();

        // Cleanup function to reset sorting state if component is unmounted
        return () => setIsSorting(false);

    }, [array, setArray, algoSpeed, setIsSorting]);

    return null;
};

export default SelectionSort;
