const sorter = (arrayPassed)=> {
  var swapNum;
  var swapCounter;

  do{
      for (var i = 1, swapCounter = 0; i < arrayPassed.length; i++){
          if(arrayPassed[i - 1] > arrayPassed [i]){
              swapNum = arrayPassed[i - 1];
              arrayPassed[i - 1] = arrayPassed[i];
              arrayPassed[i] = swapNum; 
              swapCounter += 1;
          }
      }
  }while(swapCounter > 0 ); 
  return arrayPassed; 
}

const findMinMax = (array) =>
{
    sorter(array);
    const min = array[0];
    const max = array[array.length - 1];
    let minMaxArray = [];
    minMaxArray.push(min,max);
    return minMaxArray;
}

module.exports{
    sorter, findMinMax
};

let a = [3,23,54,1,8];
findMinMax(a);