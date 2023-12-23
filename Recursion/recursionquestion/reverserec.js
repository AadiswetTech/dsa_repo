// let array = [1, 2, 3, 4, 5];
 
// reverse_array = array.map((item, idx) =>
// {
//        console.log(idx)
//          return array[array.length - 1 - idx]
        
// } 
// )
// console.log("Reversed Array: ");
// console.log(reverse_array);

//reverse with recursion 
//approach:
let data = [12, 23, 34, 45, 56];

function Reversed(num, start, end) {
    let temp;
    if (start <= end) {
        temp = num[start];
        num[start] = num[end];
        num[end] = temp;
        Reversed(num, start + 1, end - 1);
    }
}

Reversed(data, 0, data.length - 1);
console.log(data); // Now data is [56, 45, 34, 23, 12]
