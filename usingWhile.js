//bai 1
let inputNum;
let sum = 0;
while (inputNum != -1){
    inputNum = +prompt('Enter the number: ');
    alert(inputNum);
    sum += inputNum;
}
document.write(sum);

//bai 2
function bai2(){
let i = 1
while (i <= 100){
    document.write(`<hr width = ${i}>`);
    i++;
}
}