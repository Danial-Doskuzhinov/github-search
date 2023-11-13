function wait(ms: number) {
  // Your code
  return new Promise((resolve)=>{
    setTimeout(resolve, ms)
  })
}

export default wait;
