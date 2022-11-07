var Cadastrar = () =>
{

    let email = document.querySelector('#Email').value
    let senha = document.querySelector('#senha').value
    let user = document.querySelector('#FullName')?.value?.split(' ')[0] 
    localStorage.setItem('isLogado','true')
    localStorage.setItem('user',user)
    window.location.href = `${window.location.origin }/src/pages/`
}

loginCheck()