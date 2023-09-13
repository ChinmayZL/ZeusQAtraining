
const joke=document.getElementById('joke')
joke.addEventListener('click',fetchjoke);
let counter=0;
const joke_area = document.getElementById('joke-area');
let logo = document.getElementById('cat');
const url='https://official-joke-api.appspot.com/random_joke';
// This will return all the posts that belong to the first user


async function fetchjoke(){
    counter++;


    try{
        if(counter==6)
    {   
        console.log("outtttt please");
        joke.innerText="RELOAD!!";
        joke_area.innerText=`I am tired now.... Please visit after some time or reload the site`;
        logo.src="cat3.jpg";
        joke_area.classList.add("bg-white");
    }
    else if(counter==7)
    {
        location.reload();
    }
    else
    {
        joke_area.innerHTML=" Just testing your patiencee !!!";
        logo.src="cat1.jpg";
        let response=await fetch(url);
        if(response.status!=200){
            throw new Error("Not in good mood, revisit later !!");
        }
        let data = await response.json();
        //console.log(data)
        joke_area.innerHTML=`${data.setup}<br>.<br>.<br>.<br>${data.punchline}`;
        logo.src="cat2.jpg";
        console.log(counter);
        
    }  
    }
    catch(error){
        joke_area.innerHTML=`Network fails to deliver a joke to you `;
        logo.src="cat4.jpg";
        joke.remove();
    }
}








