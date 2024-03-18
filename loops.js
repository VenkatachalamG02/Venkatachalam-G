let array1 = []

for(let i=0;i<10;i++){
    if(i%2===0){
        array1.push(i+3)
    }
    else if(i%2===1){
        array1.push(i+2)
    }
    else if(i===9){
        break
    }
}

console.log(array1)