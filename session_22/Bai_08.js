let numbers=[2,5,7,4,1,8,6,2,1,7];
let check=[];
let arr=[];
for(let i=0;i<numbers.length;i++){
    let dem=1;
   for (let j = i+1; j < numbers.length; j++) {
    if(numbers[i]==numbers[j]){
        dem++;
    }
    if(dem>1){
    check[i]=dem;
    }
   }
}
let max =check[0];
for(let i=1;i<check.length;i++){
if(max<check[i])
   max=check[i]
}
for(let i=0;i<check.length;i++){
    if(check[i]==max)
       arr[i]=numbers[i];
    }
min=arr[0];
for(let i=1;i<arr.length;i++){
    if(min>arr[i]){
        min=arr[i];
    }
}
document.write(min);