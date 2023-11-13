function printAsyncNumbers(n:number) {
    function WithDelay(number:number, delay:number) {
      setTimeout( () => {
        console.log(number);
        if (number < n) {
          WithDelay(number + 1, delay + 1);
        }
      }, delay * 1000);
    }
  
    WithDelay(1, 1);
  }
  
  

export default printAsyncNumbers;
