
document.getElementById('btn1').addEventListener('click',fetchData);
const tb = document.getElementById('tb')



async function fetchData(){
    const responsecontainer1 = document.getElementById('response-container1');
    const responsecontainer2 = document.getElementById('response-container2');
    const url1='https://jsonplaceholder.typicode.com/users/'+ tb.value;
    const url2='https://jsonplaceholder.typicode.com/posts?userId='+tb.value;
    function range(start, end) {
        const ans = [ ];
        for (let i = start; i <= end; i++) {
        ans.push(i);
        }
        return ans;
        }
        const myArray = range(1, 11);
        console.log(myArray);
    
    try{
        //Display a waiting for response... message while waiting for the fetch response
        responsecontainer1.innerHTML="WAITING FOR RESPONSE....";
        responsecontainer2.innerHTML="WAITING FOR RESPONSE....";
        //Make a get request using the async fetch API 
        let response1 = await fetch(url1);
        let response2 = await fetch(url2);
                            
       
        if(response1.status!=200){
            throw new Error("Network response was not ok, statuscode: " + response1.status);
        }
        let data1 = await response1.json();

        if(response2.status!=200){
            throw new Error("Network response was not ok, statuscode: " + response2.status);
        }
        let data2 = await response2.json();
        
        
        // Display the response data
        responsecontainer1.innerHTML=""
        responsecontainer1.innerHTML="<h2>User Information</h2>";
        
        responsecontainer1.innerHTML+=
                `
                <p><b>id:</b>${data1.id}</p></b>
                <p><b>Name:</b>${data1.name}</p>
                <p><b>Username:</b>${data1.username}</p>
                <p><b>Email:</b>${data1.email}</p>
                <p><b>Address:</b><br> street-${data1.address.street}<br> suite-${data1.address.suite}<br> city-${data1.address.city}<br> zipcode-${data1.address.zipcode}<br> geo: lat-${data1.address.geo.lat} lng-${data1.address.geo.lng}</p>
                <p><b>Phone:</b>${data1.phone}</p>
                <p><b>Website:</b>${data1.website}</p>
                <p><b>Company:</b><br> name-${data1.company.name}<br> catchPhrase-${data1.company.catchPhrase}<br> bs-${data1.company.bs}</p>
                `
        
        



        responsecontainer2.innerHTML="<h2>User Posts Information</h2>";
        for ( let i=0;i<=data2.length;i++)
        {
            let data22=data2[i].title
            let data222=data2[i].body
            responsecontainer2.innerHTML+=  `${[i+1]} .<b>Title: </b>${JSON.stringify(data22,null,2)}<br>
             <b>Body: </b>${JSON.stringify(data222,null,2)}<br>`;
           
            //console.log(data2[i].title);
        }
        tb.value=``;


        
        //responsecontainer2.innerHTML+=JSON.stringify(data2,null,2);
        
        
    }
    catch(error){
        if(!(tb.value in myArray))
        {
            alert ("You must enter number between 1 - 10\n"+error);
            tb.focus();
            tb.value="";
            responsecontainer1.innerHTML="Details";
            responsecontainer2.innerHTML="Posts";
        }
        
        //responsecontainer1.innerHTML=error;
        //responsecontainer2.innerHTML=error;
        
        
    }

}

/*


fetch(url2)
  .then((response) => response.json())
  .then((data) => Render(data));


const Render = (contents) => {
    contents.forEach((content) => {
      /*const cards = `
      <p>${content.username}</p>
      `
      
     for (let i=0;i<=content.length;i++)
     {
        console.log(content[i]);
     }
     
    
    
    
    })}};

    */
