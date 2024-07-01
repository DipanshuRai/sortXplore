import { useEffect } from 'react';

const InsertionSort = ({ array, setArray, algoSpeed, setIsSorting }) => {

    const updateColor=(index,color)=>{
        document.getElementsByClassName('array-bar')[index].style.backgroundColor = color;
    }

    useEffect(() => {
        document.getElementById("Time_Worst").innerText = "O(N^2)";
        document.getElementById("Time_Average").innerText = "Θ(N^2)";
        document.getElementById("Time_Best").innerText = "Ω(N)";
        document.getElementById("Space_Worst").innerText = "O(1)";

        const insertionSort = async () => {
            const n = array.length;
            const arrayCopy = [...array];

            for(let i=0; i<n; i++){
                updateColor(i,"yellow")
                await new Promise((resolve) => setTimeout(resolve, (10 - algoSpeed) * 100));
                let j=i;
                while(j>0 && arrayCopy[j]<arrayCopy[j-1]){
                    updateColor(j,"red");
                    updateColor(j-1,"red");
                    await new Promise((resolve) => setTimeout(resolve, (10 - algoSpeed) * 100));
                    [arrayCopy[j], arrayCopy[j-1]] = [arrayCopy[j-1], arrayCopy[j]];
                    setArray([...arrayCopy]);
                    updateColor(j,"green");
                    j--;
                }
                updateColor(j,"green");
            }
            setIsSorting(false);
        };
        insertionSort();
        return () => setIsSorting(false);
    }, [array, setArray, algoSpeed, setIsSorting]);
    return null;
};

export default InsertionSort;