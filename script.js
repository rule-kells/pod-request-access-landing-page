const emailErrorMsg = document.querySelector('.email-error-msg')
const btn = document.querySelector('.btn')



 btn.addEventListener('click', function(){
     const checkValidation = document.querySelector("input").validity.valid
     if(!checkValidation) {
         emailErrorMsg.classList.remove('email-error-hidden')
         emailErrorMsg.classList.add('email-error-msg-validate')
     } else {
        emailErrorMsg.classList.add('email-error-hidden')
         emailErrorMsg.classList.remove('email-error-msg-validate')
     }
 })


// if ()
