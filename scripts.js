/* Add your JavaScript to this file */


document.addEventListener('DOMContentLoaded', function(){
    let form_id = document.querySelector("form");

   form_id.addEventListener('submit', function(event){
        event.preventDefault();
        

        let email = document.getElementById("email");
        let message_div = document.querySelector(".message");
    
        let success_message = `Thank you! Your email address ${email.value} has been added to our mailing list!`;
        let fail_message = "Please enter a valid email address.";

        if (email.value.length == 0){
                message_div.textContent = fail_message;
            }
            else{
                message_div.innerHTML = success_message;
                
            }
    });

});

