var login = ()=>{

    fetch('../mockDB.json').then(response => response.json().then(data => {
        let email = document.querySelector('#email')
        let senha = document.querySelector('#senha')

        user = data.find(e=> e.email === email.value)
        if(!user){
            document.querySelector('#warningLogin').innerHTML = "Usuario não encontrado"
            document.querySelector('#warningLogin').classList.remove('d-none')
            return
        }
        if( user.password != senha.value){
            document.querySelector('#warningLogin').innerHTML = "Senha Incorreta"
            document.querySelector('#warningLogin').classList.remove('d-none')
            return
        }

        document.querySelector('#warningLogin').classList.remove('d-none','alert-danger')
        document.querySelector('#warningLogin').classList.add('alert-success')
        document.querySelector('#warningLogin').innerHTML = "Usuario Logado com sucesso"

        localStorage.setItem('isLogado','true')
        localStorage.setItem('user',user.user)
        loginCheck()
    }))
}

var loginCheck = async () => {
    if(localStorage.getItem('isLogado') === 'true'){
        document.querySelector('#labelAcessarConta').innerHTML = await localStorage.getItem('user')
        document.querySelector('#warningLogado').classList.remove('d-none')
        document.querySelector('#formLogin').classList.add('d-none')
        return
    }
    document.querySelector('#formLogin')?.classList?.remove('d-none')
    document.querySelector('#warningLogin')?.classList?.add('d-none')
    document.querySelector('#warningLogado')?.classList?.add('d-none')
    document.querySelector('#labelAcessarConta').innerHTML = 'Acessar Minha Conta'
    
}

var exitLogin = ()=>{
    localStorage.clear()
    loginCheck()
}

var changeTheme = () =>{
    document.querySelector('.menu').classList.toggle('menuDark')
    document.querySelector('body').classList.toggle('bodyDark')
}

var changeSize = () => {
    document.querySelector('#iconConta').classList.toggle('fa-3x')
}

loginCheck()