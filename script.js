const submit = document.getElementById('submit')
const form = document.querySelector('form')
const inputs = form.querySelectorAll('.input');
const radioerror = document.getElementById('radioerror')
const main = document.querySelector('main')


submit.addEventListener('click', (event) => {
    event.preventDefault()

   inputs.forEach(element => {
     
        if (element.checkValidity() === false){

            if (element.classList.contains('radio')) {
                radioerror.style.display = 'flex'
                element.setAttribute('aria-invalid', 'false');

            } else {
                element.parentElement.getElementsByClassName('error')[0].style.display = 'flex'
                element.setAttribute('aria-invalid', 'false');

            }
        } else {
            if (element.classList.contains('radio')) {
                radioerror.style.display = 'none'
                element.setAttribute('aria-invalid', 'true');

            } else {
                element.parentElement.getElementsByClassName('error')[0].style.display = 'none'
                element.setAttribute('aria-invalid', 'true');

            }
            
        }

      
    });

    function validchecker() {
        return Array.from(inputs).some(element => {
            if (element.checkValidity() === false) {
                return true; 
            }
            return false;
        }) ? false : true;
    }

    if (validchecker() !== false) {
          const success = document.getElementById('success')
        success.style.display = 'flex'
        main.style.margin = '0 auto'
    } 

  
  
})