
add.onclick=function(){
  let name = nameINPT.value
  let num1 = Number(n1.value)
  let num2 = Number(n2.value)
  let result = num1 + num2
  label2.value = `${name}, the sum is ${result}`
}
