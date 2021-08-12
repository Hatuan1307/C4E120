function getMaxSubSum (arr) {
    var max = 0;
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        for (k = 1;k < (arr.length - i);k++) {
          let arrCon = arr.slice(i, i+k);
          for (j = 0; j < arrCon.length; j++)  {
              sum += arrCon[j];
          }
          if (sum > max) {
              max = sum;
          }
          sum = 0;
        } 
    }
    console.log(max); console.log(sum);
} 
getMaxSubSum([1, -2, 3, 4, -9, 6])