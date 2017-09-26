module.exports = {
  aritGeo: (arr) => {
    if(arr.length === 0){
      return 0;
    }else if(arr.length ==1 || arr.length==2){
      return -1;
    }else{
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
      if (testArit === true){
        return "Arithmetic";
      }
      else if (testGeo === true){
        return "Geometric";
      }
      else{
        return - 1;
      }
    }  

  }
  
};