function submit() {
  console.log(document);
  var num1 = Number(document.getElementById("n1").value);
  var num2 = Number(document.getElementById("n2").value);
  var operator = document.getElementById("chooseOper").value;
  switch(operator) {
    case "add":
      ans = num1+num2;
      break;
    case "minus":
      ans = num1-num2;
      break;
    case "multiply":
      ans = num1*num2;
      break;
    case "divide":
      ans = num1/num2;
      break;
  }
  document.getElementById("result").innerHTML = "Answer: "+ans
}
