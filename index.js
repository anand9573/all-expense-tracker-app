form=document.getElementById('form')
form.addEventListener('submit',additem)
function additem(e){
    e.preventDefault()
    let li=document.createElement('li')
    li.appendChild(create)
}

//         let form=document.getElementById('form')
//         let itemlist=document.getElementById('itemslist')
//         form.addEventListener('submit',additem)
//         delbtn.addEventListener('click',removeItem)
//         function additem(e){
//              e.preventDefault();
//              var li=document.createElement('li')
//              var textd=document.getElementsByClassName('textd')
//              var expense=document.getElementById('expense')
//              var des=document.getElementById('des')
//              var cat=document.getElementById('cat')
//              li.classList.add('list-group-item')
//              li.classList.add('m-2')
//              li.classList.add('bg-primary')
//              li.classList.add('text-white')
//              li.style.listStyle='none'
//              li.appendChild(document.createTextNode(expense.value+' '+des.value+' '+cat.value));
//              localStorage.setItem('expense',expense.value)
//              localStorage.setItem('description',des.value)
//              localStorage.setItem('category',cat.value)
//              editbtn=document.createElement('button')
//              editbtn.textContent='Edit'
//              editbtn.classList.add('bg-warning')
//              editbtn.classList.add('text-white')
//              editbtn.classList.add('float-right')
//              editbtn.classList.add('m-2')
//              editbtn.style.borderRadius = "5px";
//              li.appendChild(editbtn)
//              delbtn=document.createElement('button')
//              delbtn.classList.add('bg-danger')
//              delbtn.classList.add('text-white')
//              delbtn.classList.add('float-right')
//              delbtn.classList.add('m-2')
//              delbtn.style.borderRadius = "5px";
//              delbtn.textContent='Delete'
//              delbtn.textContent='Delete'
//              li.appendChild(delbtn)
//              delbtn.addEventListener('click',ondelete)
//              function ondelete(e){

//                 localStorage.removeItem('expense')
//                 localStorage.removeItem('description')
//                 localStorage.removeItem('category')
//              }

             
//             //  li.appendChild(document.createTextNode('done'));
//              itemlist.appendChild(li);
//             }
//     //         function removeItem(e){
//     //         var rlist=e.target.parentElement;
//     //         itemList.removeChild(rlist);
//     //         localStorage.removeItem('expense')
//     //         localStorage.removeItem('description')
//     //         localStorage.removeItem('category')
//     // }
//             function removeItem(e){
//             var rlist=e.target.parentElement;
//             itemList.removeChild(rlist);
//             localStorage.removeItem('expense')
//             localStorage.removeItem('description')
//             localStorage.removeItem('category')
// }
//         var form = document.getElementById('form');
//         var itemList = document.getElementById('itemslist');
//         // var filter = document.getElementById('filter');
//         itemList.addEventListener('click', removeItem);
//         // filter.addEventListener('keyup', filterItems);
//         form.addEventListener('submit',addItem);
//         itemList.addEventListener('click', EditItem);
//         function addItem(e){
//             e.preventDefault();
//             var newItem=document.getElementById('item').value;
//             // var newItem=document.getElementById('item').value;
//             var newItem=document.getElementsByClassName('addedtext')
//             // console.log(newItem)


//             var li=document.createElement('li');
//             li.className='list-group-item';
//             li.appendChild(document.createTextNode(newItem));
//             li.appendChild(document.createTextNode(newItem[0].value+' '+newItem[1].value+' '+newItem[2].value));
//             localStorage.setItem('Expense',newItem[0])
//             localStorage.setItem('Description',newItem[1])
//             localStorage.setItem('Category',newItem[2])
//             itemList.appendChild(li);

//             var deletebtn=document.createElement('button')
//             var editbtn=document.createElement('button')
//             deletebtn.className='btn btn-danger btn-sm float-right delete m-1'
//             editbtn.className='btn btn-primary btn-sm float-right m-1'
//             deletebtn.appendChild(document.createTextNode('Delete'));
//             editbtn.appendChild(document.createTextNode('Edit'));
//             li.appendChild(deletebtn);
//             li.appendChild(editbtn);
//             itemList.appendChild(li)   
//         }
//         function EditItem(e){
//             var text = prompt("Enter the text you want to edit:");
//             var li = e.target.parentElement;
//   li.firstChild.textContent = text;
//   li.firstChild.color='green'
//         }
//         function removeItem(e){
//     if(e.target.classList.contains('delete')){
//             var li=e.target.parentElement;
//             itemList.removeChild(li);
//             localStorage.removeItem('expense')
//             localStorage.removeItem('description')
//             localStorage.removeItem('category')
//     }
// }
// function filterItems(e){
//     var text=e.target.value.toLowerCase();
//     var items=itemList.getElementsByTagName('li');
//     Array.from(items).forEach(function(item){
//         var itemName=item.firstChild.textContent;
//         if(itemName.toLowerCase().indexOf(text)!=-1){
//             item.style.display='block';
//         }else{
//             item.style.display='none';
//         }
//     });
// }