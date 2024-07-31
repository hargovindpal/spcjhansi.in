
var contactForm = document.getElementById('contact-form');
contactForm.style.display='none';

var i=1;
function showForm(){
   
    if(i==1){
        contactForm.style.display='block';
        i--;
    }
    else{
        contactForm.style.display='none';
        i++;
    }
   
}