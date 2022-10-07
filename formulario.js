// Example starter JavaScript for disabling form submissions if there are invalid fields
function validar() {
   'use strict'

 
   // Fetch all the forms we want to apply custom Bootstrap validation styles to
   var forms = document.querySelectorAll('.needs-validation')

   // Loop over them and prevent submission
   let i = 0;
   Array.prototype.slice.call(forms)
     .forEach(function (form) {
       form.addEventListener('submit', function (event) {
         if (!form.checkValidity()) {
           event.preventDefault()
           event.stopPropagation()
         }
         else {
         if(i===0)
         {
            console.log(i)
            alert("Formulario Enviado")
            i++
            
         }
      }
 
         form.classList.add('was-validated')
       }, false)
     
     })
     
 }
