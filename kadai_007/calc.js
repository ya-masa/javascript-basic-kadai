let num;
let outputText;

num = 330;

if (num%3==0){
  outputText="3の倍数です";
  if (num%5==0){
    outputText="３と５の倍数です";
  }
}
else if(num%5==0){
  outputText="5の倍数です"
}
else {
  outputText=num;
}

console.log(outputText);