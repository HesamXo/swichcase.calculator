let num1= +prompt("عدد اول را وارد کنید");
let op=prompt(" عملیات را وارد کنید");
let num2= +prompt("عدد دوم را وارد کنید");

if (op== "/" ){
    if (num2==0){
        alert("عدد دوم نمیتواند صفر باشد");
    }
    else {
        alert(num1/num2);
    }
}
switch (op){
    case "+":
        alert(num1+num2);
        break; 
    case "-" :
        alert(num1-num2);
        break;
    case "*" :
        alert(num1*num2);
        break;
    case "/" :
        alert(num1/num2);
        break;
    default:
        alert("عملیات مجاز نیست");
        break;
}