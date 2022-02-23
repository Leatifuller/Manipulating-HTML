//1. 
const button=document.createElement('button');
const buttonText=document.createTextNode('Click');
button.appendChild(buttonText);
document.body.appendChild(button);

button.addEventListener('click', function(){
    alert('Grand Risings!');
})

//2.

let message=document.getElementById('text-box');
button.addEventListener('click',function(){
    alert(message.value)
}) 

//3. 

let div3=document.createElement('div');
div3.id='div3';
div3.textContent='3';
document.body.appendChild(div3);
div3.addEventListener('mouseover', function(){
    div3.style.backgroundColor='red';
div3.addEventListener('mouseleave', function(){
    div3.style.backgroundColor='white';
})
})

//4.
const div4=document.createElement('div');
div4.id='div4';
div4.textContent='4';

document.body.appendChild(div4);
div4.appendChild(para4);
para4.addEventListener('click', function(){
    letr=Math.floor(Math.random()*255);
    letg=Math.floor(Math.random()*255);
    letb=Math.floor(Math.random()*255);
    letrgbCol='rgb(${r},${g},${b})';
    para4.style.color=rgbCol;
})

//5.
let div5=document.createElement('div');
div5.id='div5';
div5.textContent='5';
let divBtn=document.createElement('button');
divBtn.textContent='Click';
divBtn.id='divBtn';

document.body.appendChild(div5);
div5.appendChild(divBtn);

divBtn.addEventListener('click', function(){
    let span=document.createElement('span');
    span.textContent='Goddess Leati! ';
div5.appendChild(span);
})


//6.
let div6=document.createElement('div');
div6.id='div6';
div6.textContent='6';
ulBtn=document.createElement('button');
ulBtn.id='ulBtn';
ulBtn.textContent='6';
let uList=document.createElement('ul');

document.body.appendChild(div6);
div6.appendChild(ulBtn);
div6.appendChild(uList);

const nameArr=[
'Ape',
'Monko',
'Dragon',
'Dea',
'Majik',
'SinCy',
'Abdul',
'Destiny',
'Larry',
'ApTure'
];

const Btn6=document.getElementById('ulBtn');
let counter =0;
Btn6.addEventListener('click', function(){
    if(counter<10){
        let friendName=nameArr[counter];
        const newLi=document.createElement('li');
        newLi.textContent=friendName;
        uList.appendChild(newLi);
    }
    counter++;
})
