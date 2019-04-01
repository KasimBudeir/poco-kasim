console.log('My code is runing');
let element = document.getElementById('mypara');
let greet = function (name) {
    console.log('Hello ' + name);
}

let setClassTip = function () {
    let element = document.getElementById('mypara');
    element.className = 'tip';

}
function setClassWarning() {
    let element = document.getElementById('mypara');
    element.className = 'warning';
}

function clearClass() {
    let element = document.getElementById('mypara');
    element.className = '';
}



function setClass(event,className) {
    console.log('the function is work');
    element.className = className;
}
let li1 = document.getElementById('li1');
console.log(li1);
li1.addEventListener("click" ,function(){
    setClass(event,'warning');
});

let li2 = document.getElementById('li2');
li2.addEventListener('click', function (){
    setClass(event,'tip')
}); 

let li3 = document.getElementById('li3');
li3.addEventListener('click', function (){
    setClass(event,'')
}); 