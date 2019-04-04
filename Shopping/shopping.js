document.querySelector('button').addEventListener('click', function (event) {
    let inputBox = document.getElementById('item');
    //to start typping after adding item in input element
    inputBox.focus();
    if (inputBox.value !==""){
        let myShoppingList = document.getElementById('my-shoppingList');
        myShoppingList.appendChild(createNewListItem(inputBox.value));  
    }
    else{

alert('It is empty value');
    }
   
    inputBox.value = '';
    
    
});
// start typping in this element
document.getElementById('item').focus();

document.getElementById('item').addEventListener('keyup', function (event) {
    if (event.key === 'Enter'){
        document.querySelector('button').click();
    }
    
    });


    
function createNewListItem (itemName){
 
    let li = document.createElement('li');
  
  let spn = document.createElement('span');
  spn.innerText = itemName;

  let space = document.createTextNode('  ');
  
  
  let btn = document.createElement('button');
  btn.innerText = 'Delete';
//Listener for delete button; 
  btn.addEventListener('click', function () {
    li.remove();
});

    li.appendChild(spn);
    li.appendChild(space);
    li.appendChild(btn);
    return li;
    
}