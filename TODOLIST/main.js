let ite =document.getElementById('ite')
let ull= document.querySelector('.ul-li')
let header =document.querySelector('.my-header')
let submit =document.querySelector('.submit')
let list = document.querySelector('.lii')
let filter = document.querySelector('#filter')
let butn = document.querySelector('.button1')

ite.addEventListener('submit', addit)

// delete function
ull.addEventListener('click', removeItem)
//filter event
filter.addEventListener('keyup', filterItem)

function addit(event){
    event.preventDefault();
    for (let i = 0; i <list.length; i++) {
        const element = list[i];
        element.classList.add('showborder')
    }
    header.style.backgroundColor = 'green'
    submit.style.backgroundColor = 'green'
   for (let i = 0; i<butn.length; i++) {
     let element = butnblue[i];
     element.style.backgroundColor='green'  
   }
    //geting input value 
    let item = document.querySelector('#items').value
    //creating new li element
    var newli = document.createElement('li');
    //add classname
    newli.className = 'lii'
   // console.log(newli)
    newli.appendChild(document.createTextNode(item))
   // console.log(newli)
   
    // adding the delete btn
    let delbtn = document.createElement('button')
    delbtn.className ='button1'
    // adding text to the button
    delbtn.appendChild(document.createTextNode('x'))
    //adding the button to newli
    newli.appendChild(delbtn)
    ull.appendChild(newli)
}
function removeItem(e){
    if(e.target.classList.contains('button1')){
        // for confirmation
        if(confirm('ARE YOU SURE')){
            let li = e.target.parentElement
            ull.removeChild(li)
        }
    }
}
//filter function
function filterItem(c){
    //we get the text and convert it to lowercase
    let text = c.target.value.toLowerCase(); 
    //console.log(text)
    //get items from ul
    let all = ull.getElementsByTagName('li')
    //console.log(all)
    //covert the html collection to array
    Array.from(all).forEach(function(item){
        let itemName = item.firstChild.textContent;
        //console.log(itemName)
        if(itemName.toLowerCase() .indexOf(text) !=-1){
            item.style.display ='flex'
        }
        else{
            item.style.display = 'none'
        }
        
    } 
    
 )
    
}