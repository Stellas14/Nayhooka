var Cadastrar = () => {

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault()
                event.stopPropagation()

                if (!form.checkValidity()) {
                    
                    console.log("Invalido")
                }else{
                    console.log("valido")
                    let email = document.querySelector('#Email').value
                    let senha = document.querySelector('#senha').value
                    let endereco = document.querySelector('#inputAddress').value
                    let user = document.querySelector('#FullName')?.value?.split(' ')[0]
                    localStorage.setItem('isLogado', 'true')
                    localStorage.setItem('user', user)
                    localStorage.setItem('endereco',endereco)
                    window.location.href = `${window.location.origin}/src/pages/`
                }

                form.classList.add('was-validated')


            }, false)
        })

}

loginCheck()
loadCarrinho()