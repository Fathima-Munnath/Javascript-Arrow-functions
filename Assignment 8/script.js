
const stringOperation =(input)=>{
    input = input.toUpperCase();
    let returnString =''                                                                                           
    for(let i=0; i<input.length; i++){
       returnString = returnString+i+input[i]
    }
    return(returnString)
}

    
let iEnteredString = prompt("Enter a string");
let finalString = stringOperation(iEnteredString);
    
    console.log(finalString)
    alert(finalString);
    










