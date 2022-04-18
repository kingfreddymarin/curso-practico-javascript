// const value = [50, 100, 20, 50, 10, 15, 85, 10];
// //initialize sum as a type number
// let sum = 0;
// console.log(value);

// //bucle to sum every value in the array
// for (i=0; i<value.length;i++){
//     sum += value[i];
// }
// console.log(sum);

// const mean = sum/value.length;
// console.log(mean);
let array = [];
let arrayLength;
let content = 0;
let sum = 0;

//Inserting int values into an array
function insertIntoArray(content){
    const arrayContent = document.getElementById("arrayContent")
    content = Number.parseInt(arrayContent.value);
    array.unshift(content);
    console.log(array);
    arrayLength = array.length;
}

//calculating mean
function calculateMean(sumArray){
    for (i=0; i<arrayLength;i++){
        sum += array[i];
    }
    const mean = sum/arrayLength;
    const displayResult = document.getElementById("mean");
    displayResult.innerText = "The arithmetic mean is: " +  mean;
}