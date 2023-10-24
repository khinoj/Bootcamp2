// Create our input data
const unsortedInputArray = [];

// seed data in unsortedInputArray
for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

// TODO: create bubble sort function
const bubbleSort = (arr) => {
  //loop to access an array element
  for (var j = 0; j < arr.length; j++) {

      //compares two adjacent elements
      if (arr[j] > arr[j + 1]) {

        // swapping occurs if element are no in intended order
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp

      }
  }
  return arr;
};

const sorted = bubbleSort(unsortedInputArray);
console.log('Post Sort:', sorted.join(' '));
console.log('DONE!');
