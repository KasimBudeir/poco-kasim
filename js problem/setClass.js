console.log('My code is runing');

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