let germanFruits = ['der Apfel','die Ananas','die Banane','die Erdbeere','die Kirsche'];
let germanVegetables = ['die Kartoffel','die Karotte','die Tomate','die Gurke','der Brokkoli '];
// normal array
let pNormal = document.getElementById('normal');
pNormal.innerHTML = fromArrToUl(germanFruits);

// reversed array
function reverse(){
    let pReverse = document.querySelector('#reverse');
pReverse.innerHTML = fromArrToUl(germanFruits.reverse());
germanFruits.reverse();
}

//slicing element from the  array
function slice(){
    let pSlice = document.getElementById('slice');
pSlice.innerHTML =fromArrToUl(germanFruits.slice(1,4));//This method does not change the original array;
//splicing element to the array

}

let pSplice = document.getElementById('splice');
germanFruits.splice(2, 0,"die Birne","die Orange");//This method changes the original array.
 pSplice.innerHTML = fromArrToUl(germanFruits);

 //Array mapping
 let pMapping = document.getElementById('mapping');
 let maparr =germanFruits.map(function(value, index,array){
    

    return value += ' ist lecker';
 })
 pMapping.innerHTML = fromArrToUl(maparr);
// Array foEacha()    Not : the diferent between forEach and mappin is : mapping create a new array  then he puts the element inside the array after performing the function,
//  forEach just execute the function for the elements of array
function fromArrToUl(arr) {
    let text = '<ul>'
    arr.forEach(function(value) {
        text += '<li>' + value + '</li>';
    });
    text += '</ul>';
 
    return text;
       
    
}

let str = "PowerCoders is a great coding academy";
let pos = str.lastIndexOf("coding");
document.getElementById("demo1").innerHTML = pos;

let str2 = str.replace('is','are');
console.log(str,str2);

function myFunction() {
    var str = document.getElementById("demo2").innerHTML; 
    var txt = str.replace("great","wonderful");
    document.getElementById("demo2").innerHTML = txt;
  }

//defining an obgject and looping over its properties 
  let person = {firstName : 'Kasim',
                lastName : 'Budeir',
                age: 27,
                career : 'Engineer'
                }
                let personInfo = '';

        for (x in person){
            
             personInfo += person[x]+ ' '
        }
        console.log(personInfo);

                