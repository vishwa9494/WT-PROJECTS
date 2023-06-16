function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;
  
    switch (operator) {
      case "sum":
        result = num1 + num2;
        break;
      case "product":
        result = num1 * num2;
        break;
      case "difference":
        result = num1 - num2;
        break;
      case "quotient":
        result = num1 / num2;
        break;
      default:
        result = "Invalid operation";
    }
  
    document.getElementById("result").textContent = "Result: " + result;
  }
  
  let operator = "";
  
  function setOperator(op) {
    operator = op;
  }
  