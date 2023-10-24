class Calculator {
    result:number;
    constructor(initialValue:number) {
      this.result = initialValue;
    }
  
    add(value:number) {
      this.result += value;
      return this;
    }
  
    subtract(value:number) {
      this.result -= value;
      return this;
    }
  
    divide(value:number) {
      this.result /= value;
      return this;
    }
  
    multiply(value:number) {
      this.result *= value;
      return this;
    }
  
    logResult() {
      console.log(this.result);
      return this;
    }
  }

export default Calculator;
