
let inputBox = document.getElementById('item');
let myShoppingList = document.getElementById('my-shoppingList');
let addItemButton = document.getElementById('addItemBtn');
addItemButton.disabled = true;
document.querySelector('button').addEventListener('click', function (event) {
    //to start typping after adding item in input element
    inputBox.value = inputBox.value.trim();
    if (inputBox.value) {
        myShoppingList.appendChild(createNewListItem(inputBox.value));
    
    }
    else {
        

        alert('It is empty value');
    }

    inputBox.value = '';
    inputBox.focus();
    addItemButton.disabled = true;//disable the addItemButton after clicking it

});
// start typping in this element
inputBox.focus();

document.getElementById('item').addEventListener('keyup', function (event) {
    if (inputBox.value.trim()){// by this if we check the inputBox(after cleaning the white space) if it is empty the addbutton will be disabled else will be enable
        addItemButton.disabled = false;
        if (event.key === 'Enter') {
            document.querySelector('button').click();
        }
    }
    else{
        addItemButton.disabled = true;
    }
   

});



function createNewListItem(itemName) {

    let li = document.createElement('li');

    let spn = document.createElement('span');
    spn.innerText = itemName;

    let space = document.createTextNode('  ');


    let btn = document.createElement('button');
    btn.innerText = 'Delete';
    btn.classList.add('red');
    //Listener for delete button; 
    btn.addEventListener('click', function () {
        li.remove();
    });

    li.appendChild(spn);
    li.appendChild(space);
    li.appendChild(btn);
    return li;

}