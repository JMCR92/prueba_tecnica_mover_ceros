const array = [1, 2, 0, 1, 0, 1, 0, 3, 0, 1]; //create array of numbers
const res = moveRight(array); //called moveRight function

console.log(res); //show result

function moveRight(array) {
    let nums = []; //create arrays to add zeros and non zeros separately
    let zeros = [];
    array.forEach(function (num) {
        num != 0 ? nums.push(num) : zeros.push(num); //if array element is non zero, inserts in 'nums' array, else inserts in 'zeros' array
    });
    nums = nums.concat(zeros); //concats nums and zeros in one array
    return nums;
}
