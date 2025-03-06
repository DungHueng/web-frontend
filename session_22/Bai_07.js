let numbers=[2,5,7,4,1,8,6,2,5,7];
for(let i=0;i<numbers.length;i++){
    for(let j=numbers.length-1;j>i;j--){
        if(numbers[j]<numbers[(j-1)]){
           let luu = numbers[(j-1)];
           numbers[(j-1)]=numbers[j];
           numbers[j]=luu;
        }
    }
}
for(let i=0;i<numbers.length;i++){
    document.write(numbers[i]);
}