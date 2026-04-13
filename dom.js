

// console.log(document);

// function random(){
//   let name = document.getElementById("myname").value;
//   alert("welcome " + name);
// }

// function random(){
//   let a = document.getElementById("text");
//   a.style.color = "blue";
// }

// function random(){
//   let a = document.getElementById("myname");
//   let outt = document.getElementById("output");
//   outt.innerHTML = a.value;
// }


function calculate(){
  var n1 = parseFloat(document.getElementById("num1").value);
  var n2 = parseFloat(document.getElementById("num2").value);
  var oper = document.getElementById("operator").value;
  if(oper == "+"){
    document.getElementById("result").value = n1+n2;
  }
  if(oper == "-"){
    document.getElementById("result").value = n1-n2;
  }
  if(oper == "*"){
    document.getElementById("result").value = n1*n2;
  }
  if(oper == "/"){
    document.getElementById("result").value = n1/n2;
  }
  document.getElementById("result").innerText = result
}