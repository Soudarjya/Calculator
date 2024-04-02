let a='';
let m=2;
let del=document.querySelector('.delete');
del.addEventListener('click',()=>{
    a=a.slice(0,-1);
})
let mod=document.querySelector('.modulo');
let operand=document.querySelector('.operands');
let elem=document.querySelector('.elements');
let minus=document.querySelector('.minus');
let plus=document.querySelector('.plus');
let into=document.querySelector('.into');
let one=document.querySelector('.one');
let divide=document.querySelector('.divide');
let c=document.querySelector('.c');
one.addEventListener('click',()=>{
    a=a+'1';
});
let two=document.querySelector('.two');
two.addEventListener('click',()=>{
    a=a+'2';
})
let three=document.querySelector('.three');
let four=document.querySelector('.four');
let five=document.querySelector('.five');
let six=document.querySelector('.six');
let seven=document.querySelector('.seven');
let eight=document.querySelector('.eight');
let nine=document.querySelector('.nine');
let zero=document.querySelector('.zero');
let decimal=document.querySelector('.decimal');
let display=document.querySelector('.display');
let but=document.querySelectorAll('.a');
let ele=document.querySelectorAll('.p');
let button=document.querySelectorAll('button');
three.addEventListener('click',()=>{
    a=a+'3';
});
four.addEventListener('click',()=>{
    a=a+'4';
});
five.addEventListener('click',()=>{
    a=a+'5';
});
six.addEventListener('click',()=>{
    a=a+'6';
});
seven.addEventListener('click',()=>{
    a=a+'7';
});
eight.addEventListener('click',()=>{
    a=a+'8';
});
nine.addEventListener('click',()=>{
    a=a+'9';
});
zero.addEventListener('click',()=>{
    a=a+'0';
});
mod.addEventListener('click',()=>{
    a=a+'%';
});
plus.addEventListener('click',()=>{
    a=a+'+';
});
minus.addEventListener('click',()=>{
    a=a+'-';
});
into.addEventListener('click',()=>{
    a=a+'*';
});
divide.addEventListener('click',()=>{
    a=a+'/';
});
decimal.addEventListener('click',()=>{
    a=a+'.';
});
let brac=document.querySelector('.bracket');
brac.addEventListener('click',()=>{
    a='('+a+')';
});
let equals=document.querySelector('.equals');
equals.addEventListener('click',()=>{
    m=eval(a);
    a=m.toString();
    display.innerText=m;
    
});
c.addEventListener('click',()=>{
    a='';
})
button.forEach((i)=>{
    i.addEventListener('click',()=>{
        display.innerText=a;
    })
})