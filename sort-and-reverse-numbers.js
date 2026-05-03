let arr = [10, 3, 5, 1, 4, 2];

arr.sort(function(a, b) {
    return a - b;
});

arr.reverse();
console.log(arr);