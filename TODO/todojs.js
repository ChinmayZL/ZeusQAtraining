
const tb=document.getElementById("tb");
const ul=document.querySelector('ul')
const reset=document.querySelector('#btn2')
const cancels=document.getElementsByClassName('cancel')
function addTask(){
    if (tb.value === ""){
        alert (" you must write something")
    }
    else{
        let li=document.createElement('li')
        li.innerHTML=tb.value
        ul.appendChild(li)
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span)
        tb.value = '';
    }
}

reset.addEventListener('click',()=>{
    console.log(" reset was clicked !! ");
    ul.innerHTML = '';
});

ul.addEventListener('click',function(e){
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
    else if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
    }
},false);