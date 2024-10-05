import { useEffect } from 'react';

const InsertionSort = ({ array, setArray, algoSpeed, setIsSorting }) => {

    const updateColor=(index,color)=>{
        document.getElementsByClassName('array-bar')[index].style.backgroundColor = color;
    }

    const delay = (algoSpeed) => {
        return new Promise((resolve) => setTimeout(resolve, (10 - algoSpeed) * 100));
    };

    useEffect(() => {
        document.getElementById("Time_Worst").innerHTML = "O(n<sup>2</sup>)";
        document.getElementById("Time_Average").innerHTML = "Θ(n<sup>2</sup>)";
        document.getElementById("Time_Best").innerHTML = "Ω(n)";
        document.getElementById("Space_Worst").innerHTML = "O(1)";

        const insertionSort = async () => {
            const n = array.length;
            const arrayCopy = [...array];

            for(let i=0; i<n; i++){
                updateColor(i,"yellow")
                await delay(algoSpeed);
                let j=i;
                while(j>0 && arrayCopy[j]<arrayCopy[j-1]){
                    updateColor(j,"red");
                    updateColor(j-1,"red");
                    await delay(algoSpeed);
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