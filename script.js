function multiplyNumber(){
    var num1 = document.getElementById("firstNumber").value;
    var num2 = document.getElementById("secondNumber").value;
    var result = num1 * num2;
    document.getElementById("result").innerHTML = "The Result is:"+ result;
}

function divideNumber(){
    var num1 = document.getElementById("firstNumber").value;
    var num2 = document.getElementById("secondNumber").value;
    if(num2==0){
        document.getElementById.innerHTML = "Division by zero";
    }
    var result = num1 / num2;
    document.getElementById("result").innerHTML = "The Result is:"+ result;
}
    
