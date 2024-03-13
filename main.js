// Change chape of movil to dektop:

let dm_image = document.getElementById('desktop-mobile-img')
let span_flex = document.querySelector('span')

if(screen.width > 700){
    dm_image.src = './assets/images/illustration-sign-up-desktop.svg'
    span_flex.remove()
}


// Submit to success subscribing

let main_card = document.querySelector('main')
let section_default = document.querySelector('section')
let section_success = document.createElement('section')
let email_form = document.forms.emailForm

function changeScreen(emailUser){

    main_card.innerHTML = 
    `\
    <img src='./assets/images/icon-success.svg' alt='success icon' class='successImg'>
    <h1>Thanks for subscribing!</h1> \
    <p>A confirmation email has been sent to <b>${emailUser}</b>. Please open it and click the button inside to confirm your subscription.</p> \
    <button type="submit" class='submitButton'>Dismiss message</button> \
    `
    main_card.className = 'successMain'

    dm_image.remove()
    span_flex.remove()

}

email_form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    let emailUser = e.target.emailUser.value

    changeScreen(emailUser)
})

// Change chape of main
