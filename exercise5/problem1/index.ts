function callbackExec(callb:string) {
    setTimeout(callb,2000)
}
function displayHello(){
    console.log('Hello');
}

callbackExec(displayHello);
export default callbackExec;
