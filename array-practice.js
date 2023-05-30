const findMinimum = arr => {
  if(arr.length === 0  ){
    return undefined
  }
  return Math.min(...arr)
};

//Time complexity = O(n)


const runningSum = arr => {
  let sum = 0;
      let sums = [];
      for (let i = 0; i < arr.length; i++) {
          sum += arr[i];
          sums.push(sum);
        }
      return sums;
};
    //Time complexity = O(n);
 




const evenNumOfChars = arr => {
  let count = 0;
	for(let i=0; i<arr.length; i++){
        if(arr[i].length % 2 === 0){
          count++
        }       
	}
  return count;
};

// space complexity = O(n);





const smallerThanCurr = arr => {
  let answer = [];
  let count =0 ;

	for(let i=0; i<arr.length; i++){
          let currentEl = arr[i];
          count=0;

         for(let j=0; j<arr.length; j++){
            let arrCheck=arr[j];

		 if(arrCheck<currentEl){
      count++;
		 } 
    }
    answer.push(count);	
    
	}
    return answer;
};
// Time complexity = O(n^2)




const twoSum = (arr, target) => {
  for(let i=0; i<arr.length; i++){
    let ele1=arr[i];
   for(let j=i+1; j<arr.length-1; j++){
    let ele2=arr[j];
    if(ele1 + ele2 === target){
      return true;
    }
   }
  }
  return false;
};
// Time complexity = O(n^2)




// const secondLargest = arr => {
//   if(arr.length<=1){
//    return undefined;
//   }

// 	let firstL = Math.max(...arr);
//   let indexing = arr.indexOf(firstL);

//    arr.splice(indexing,1);

//    return Math.max(...arr);
//   };

//   // Time complexity = O(n^2)


//   const arr = [4, 2, 3, 6, 8, 11, 13, 16, 18, 55, 65, 64, 47 ,56, 36, 25, 27, 29, 44, 145, 1235,1235,1235,1235,1235,46,257,56,845,785,72,1456,1234,67,368,36,8245,613,46,235,73,4578,35,62,56,234,562,367,234,623,462,34,56234,6,457,36,834,567,2346,2346,4235,834,57,24,6];

// console.log(secondLargest(arr));



const secondLargest = arr => {
  if(arr.length<=1){
   return undefined;
  }

	let firstL = Math.max(...arr);
  let indexing = arr.indexOf(firstL);

   arr.splice(indexing,1);

   return Math.max(...arr);
  };

  // Time complexity = O(n)


  
const shuffle = (arr) => {
  let newArr = [...arr]
  for (let i = 0; i < arr.length; i++) {
    let tempCard = newArr[i];
    let randomIndex = Math.floor(Math.random() * arr.length);
    newArr[i] = newArr[randomIndex];
    newArr[randomIndex] = tempCard;
  }
  return newArr
};

 // Time complexity = O(n)




module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];