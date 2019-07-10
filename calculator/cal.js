let output = document.querySelector('.output');

let zero = document.querySelector('.zero');
let plus = document.querySelector('.plus');
let times = document.querySelector('.times');
let divi = document.querySelector('.divi');
let minus = document.querySelector('.minus');
let equal = document.querySelector('.equal');
let clear = document.querySelector('.clear');
let back = document.querySelector('.back');

let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');

one.addEventListener("click", function(){
    if(output.innerText != "0"){output.innerText =output.innerText + one.innerText;}
    else{output.innerText = one.innerText;}
});
two.addEventListener("click", function(){
    if(output.innerText != "0"){output.innerText =output.innerText + two.innerText;}
    else{output.innerText = two.innerText;}
});
three.addEventListener("click", function(){
    if(output.innerText != "0"){output.innerText =output.innerText + three.innerText;}
    else{output.innerText = three.innerText;}
});
four.addEventListener("click", function(){
    if(output.innerText != "0"){output.innerText =output.innerText + four.innerText;}
    else{output.innerText = four.innerText;}
});
five.addEventListener("click", function(){
    if(output.innerText != "0"){output.innerText =output.innerText + five.innerText;}
    else{output.innerText = five.innerText;}
});
six.addEventListener("click", function(){
    if(output.innerText != "0"){output.innerText =output.innerText + six.innerText;}
    else{output.innerText = six.innerText;}
});
seven.addEventListener("click", function(){
    if(output.innerText != "0"){output.innerText =output.innerText + seven.innerText;}
    else{output.innerText = seven.innerText;}
});
eight.addEventListener("click", function(){
    if(output.innerText != "0"){output.innerText =output.innerText + eight.innerText;}
    else{output.innerText = eight.innerText;}
});
nine.addEventListener("click", function(){
    if(output.innerText != "0"){output.innerText =output.innerText + nine.innerText;}
    else{output.innerText = nine.innerText;}
});
zero.addEventListener("click",function(){
    if(output.innerText != "0"){output.innerText =output.innerText + zero.innerText}
});
clear.addEventListener("click",function(){
    output.innerText = "0";
});
back.addEventListener("click",function(){
    if(output.innerText.length == 1){output.innerText = "0"; }
    else{output.innerText = output.innerText.substr(0,output.innerText.length-1);}
    
});

let tem; let total=0; let type;
plus.addEventListener("click", function(){type = 1; tem = output.innerText;  output.innerText = "0";});
times.addEventListener("click", function(){type = 2;tem = output.innerText;  output.innerText = "0";});
divi.addEventListener("click", function(){type =3;tem = output.innerText;  output.innerText = "0";});
minus.addEventListener("click", function(){type=4;tem = output.innerText;  output.innerText = "0";});
equal.addEventListener("click",function(){
    if(type == 1){total=parseInt(tem)+parseInt(output.innerText);output.innerText=total;type=5;}
    else if(type ==2){total=parseInt(tem)*parseInt(output.innerText);output.innerText=total;type=5;}
    else if(type ==3){total=parseInt(tem)/parseInt(output.innerText);output.innerText=total;type=5;}
    else if(type ==4){total=parseInt(tem)-parseInt(output.innerText);output.innerText=total;type=5;}
})