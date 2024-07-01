import { useEffect } from 'react';

const BubbleSort = ({ array, setArray, algoSpeed, setIsSorting }) => {

    const updateColor=(index,color)=>{
        document.getElementsByClassName('array-bar')[index].style.backgroundColor = color;
    }

    useEffect(() => {
        document.getElementById("Time_Worst").innerText = "O(N^2)";
        document.getElementById("Time_Average").innerText = "Θ(N^2)";
        document.getElementById("Time_Best").innerText = "Ω(N)";
        document.getElementById("Space_Worst").innerText = "O(1)";

        const bubbleSort = async () => {
            const n = array.length;
            const arrayCopy = [...array];

            for (let i = 0; i < n - 1; i++) {
                let flag=0;                
                for (let j = 0; j < n-i-1; j++) {
                    updateColor(j,"yellow");
                    await new Promise((resolve) => setTimeout(resolve, (10 - algoSpeed) * 100));
                    updateColor(j,"red");
                    updateColor(j+1,"red");
                    await new Promise((resolve) => setTimeout(resolve, (10 - algoSpeed) * 100));
                    if (arrayCopy[j] > arrayCopy[j+1]) {
                        [arrayCopy[j], arrayCopy[j+1]] = [arrayCopy[j+1], arrayCopy[j]];
                        flag=1;
                    }
                    setArray([...arrayCopy]);
                    updateColor(j,"blue");
                }
                updateColor(n-i-1,"green");
                setArray([...arrayCopy]);
                if(flag===0){
                    for(let k=0; k<n; k++){
                        updateColor(k,"green");
                    }
                    break;
                }
            }
            updateColor(0,"green");
            setIsSorting(false);
        };
        bubbleSort();
        return () => setIsSorting(false);
    }, [array, setArray, algoSpeed, setIsSorting]);
    return null;
};

export default BubbleSort;