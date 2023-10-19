// TODO: Complete the 'counter' function below.
function counter() {
    let count = 0;
    return {
        increment: function () {
        count += 1;
        return count;
      },
    };
}

module.exports = counter;
