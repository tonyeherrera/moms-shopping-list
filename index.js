title.setSelectionRange(0,0);
title.focus();

document.getElementById("submit").addEventListener("click",function createListItem(event){
    event.preventDefault();
    var title = document.getElementById("title");
    const newLi = document.createElement("li")
    newLi.setAttribute("id", "list > li");
    const newDiv = creatNewItem()
    newLi.appendChild(newDiv);
    const editButton = createEditButton()
    newLi.appendChild(editButton);
    const removeButton = createRemoveButton()
    newLi.appendChild(removeButton);
    // newLi.setAttribute("class", )
    document.getElementById("list").appendChild(newLi);
    // console.log(newDiv)
    title.value = "";
    return newLi;
    
});

function creatNewItem(){
    var newDiv = document.createElement("div")
    var title = document.getElementById("title").value
    newDiv.textContent = title;
    newDiv.style.color = "black";
    return newDiv;
    
}

function createEditButton(){
    var editButton = document.createElement("button")
    editButton.textContent = "Edit";
    editButton.setAttribute("onclick","editContent(event)")
    return editButton;
    
}   

function editContent(event){
    // const editForm = '<input class="input" id="editedItem" /><button id="saveEdit" type="button" onclick="saveEdit(event)">Save</button>';
    // const formSanitizer = new sanitizer();
    // var editedItem = document.getElementById("editedItem");
    var oldItem = event.target.previousSibling.textContent;
    console.log(oldItem);
    // editedItem.value = oldItem;
    // event.target.parentElement.innerHTML = editForm;
    const editForm = document.createElement("input");
    editForm.setAttribute("class","input");
    // editForm.setAttribute("type", "text");
    editForm.setAttribute("value", oldItem);
    const saveEdit = document.createElement("button");
    saveEdit.setAttribute("id","saveEdit");
    saveEdit.setAttribute("type", "submit");
    saveEdit.setAttribute("onclick","saveEdit(event)");
    saveEdit.textContent = "Save";
    event.target.parentElement.appendChild(editForm);
    var end = oldItem.length
    editForm.setSelectionRange(end,end);
    editForm.focus();
    event.target.parentElement.appendChild(saveEdit);
    event.target.previousSibling.remove();
    event.target.nextSibling.remove();
    event.target.remove();
    
}

function saveEdit(event){
    event.preventDefault();
    const newItem = event.target.previousSibling.value
    var updatedDiv = document.createElement("div")
    updatedDiv.textContent = newItem;
    event.target.parentElement.appendChild(updatedDiv);
    const editButton = createEditButton()
    event.target.parentElement.appendChild(editButton);
    const removeButton = createRemoveButton()
    event.target.parentElement.appendChild(removeButton);
    event.target.previousSibling.remove();
    event.target.remove();
    listInput.focus();
    // // const updatedItem = newItem.value;
    console.log(newItem);
    
}

function createRemoveButton(){
    var removeButton = document.createElement("button")
    removeButton.setAttribute("onclick","removeItem(event)");
    removeButton.textContent = "X"
    // removeButton.parentElement.addEventListener("click",remove(this));
    return removeButton;
    
}

function removeItem(event){
    console.log(event.target.parentElement.id)
    event.target.parentElement.remove();

    
}

var momsCurrentList = {'list': []};
$('ul').children().each(function(i,v){
    momsCurrentList.list.push({'id':i,'value':$(v).text()});
});
localStorage.setItem('momsCurrentList',JSON.stringify(momsCurrentList));
var restoredSession = JSON.parse(localStorage.getItem('momsCurrentList'));


