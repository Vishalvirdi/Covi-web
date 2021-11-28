// For Covid Live Updates

function updateMap() {
   let result = null;
   let element =  document.getElementById('confirmed');
   let element1=  document.getElementById('totalconfirmed');
   let element2=  document.getElementById('Deaths');
   let quote = document.getElementById('newcases');
   let quote1 = document.getElementById('totalcases');
   let quote2 = document.getElementById('totaldeaths');
   fetch("https://api.covid19api.com/summary")
      .then(response => {
         return response.json();
         })
      .then(rsp => {
         result=rsp; 

       element.innerHTML= `${result.Global.NewConfirmed}`;
       element1.innerHTML= `${result.Global.TotalConfirmed}`;
       element2.innerHTML= `${result.Global.TotalDeaths}`;
       quote.innerHTML = `${result.Countries[76].NewConfirmed}`;
       quote1.innerHTML = `${result.Countries[76].TotalConfirmed}`;
       quote2.innerHTML = `${result.Countries[76].TotalDeaths}`;
})
.catch(err => console.log(err));
}
 updateMap()


//  For Form 
 function vaildform(){
   var name = document.getElementById('name').value;

   if(name==""){
     document.getElementById('falsename').innerHTML="*Please enter your name";
      return false;
   }
   if(name.length <=4 || (name.length > 20) ){
     document.getElementById('falsename').innerHTML="*Name length must be in between 5 to 20"
     return false;
   }
   if(!isNaN(name)){
     document.getElementById('falsename').innerHTML="*Only characters are allowed";
      return false;
   }

   var email = document.getElementById('email').value;
  

   if(email==""){
     document.getElementById('falseemail').innerHTML="*Please enter your email";
      return false;
   }
   if(email.length <=4 || (email.length > 40) ){
     document.getElementById('falseemail').innerHTML="*Please enter the correct email";
     return false;
   }

   var feedback = document.getElementById('feedback').value;
   if(feedback==""){
     document.getElementById('falsefeedback').innerHTML="*Please give the feedback";
      return false;
   }
   if(!isNaN(feedback)){
     document.getElementById('falsefeedback').innerHTML="*Only characters are allowed";
      return false;
   }

    }


