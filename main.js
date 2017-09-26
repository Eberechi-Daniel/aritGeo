aritGeo = function(arr){
  if(arr.constructor === Array){
    if (arr.length<1){
    return 0;
    }
    else{
      let testArit = true;
      let testGeo = true;
      const d = arr[1 ] - arr[0];
      //d serves as the common difference in an arithmetic progression
      const r = arr[1] / arr[0];
      //r serves as the common ratio in a geometric progression
      for (let i = 0; i<arr.length - 1; i++){
        if ((arr[i+1] - arr[i]) !== d){
          testArit = false;
          //checks if the array is not an arithmetic progression
          }
          if((arr[i+1] / r) !== arr[i]){
            testGeo = false;
            //checks if the array is not a geometric progression
          }
      }
      if (testArit){
        return "arithmetic";
      }
      if (testGeo){
        return "Geometric";
      }
      else{
        return -1;
      }
    }
  }
  else {
    console.log("wrong parameter given");
    return ;
  }
  
  
};

module.exports = aritGeo;