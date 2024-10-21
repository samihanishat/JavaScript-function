function getMax (numbers){
    let max = numbers[0];
    for (const num of numbers){
        if(num > max){
            max = num;
        }
}
return max;
}
const heights = [12,56,58,98,78,65,39,68,62,64,66];
console.log(getMax(heights));