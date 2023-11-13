function printNumberInInterval(callback:number) {
    let count = 1;
    const intervalId = setInterval(()=> {
      if (count <= callback) {
        console.log(count++);
        
      } else {
        clearInterval(intervalId); 
      }
    }, 1000); 
  }
  
 printNumberInInterval(10);
 export default printNumberInInterval;