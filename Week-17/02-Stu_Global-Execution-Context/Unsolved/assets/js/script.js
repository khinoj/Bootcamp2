// 1) Where is carNoise stored?
// Global Scope
const carNoise = 'Honk';
// 2) Where is goFast stored?
// Global scope
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // when goFast function is called. gofast speed is called in the confirm with value. 
  
  // 5) Where is makeNoise stored?
  // in the function execution context of gofast
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // Honk is assigned to sound, placed onto the call stack. 
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
//  pop up for user if yes speed is filled in with 80.
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
