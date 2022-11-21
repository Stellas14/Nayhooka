


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
        window.location.href = `${window.location.origin }/src/pages/`
    }))
}

var loginCheck = async () => {
    if(localStorage.getItem('isLogado') === 'true'){
        document.querySelector('#labelAcessarConta').innerHTML = `Olá, ${await localStorage.getItem('user')}`
        document.querySelector('#warningLogado')?.classList.remove('d-none')
        document.querySelector('#formLogin')?.classList.add('d-none')
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

var loadProducts = (page) => {
   
    // var guias = {
    //     ['index']:()=> {
    //         const mainDiv = document.querySelector('#gridProdutos')
    //         mainDiv.innerHTML = mainDiv.innerHTML + product[type].map(e => `
    //         <a href="./produto.html" class="col-3">
    //         <div class="produto">
    //           <img class='img-responsive' src="${e.pathImg}" id="${e.id}">
    //           <p>${e.name}</p>
    //           <p><strong>R$${e.price}</strong></p>
    //         </div>
    //         </a>`).join('')
    //     }
    // }

    // guias[page]()

    const mainDiv = document.querySelector('#gridProdutos')
    mainDiv.innerHTML = mainDiv?.innerHTML + product[page]?.map(e => `
    <a href="./produto.html" class="col-3">
    <div class="produto">
        <img class='img-responsive' src="${e.pathImg}" id="${e.name + e.id}">
        <p>${e.name}</p>
        <p><strong>R$${e.price}</strong></p>
    </div>
    </a>`).join('')



}

loginCheck()

document.querySelector('#formPesquisa').addEventListener("submit",function(event){
    event.preventDefault()
    event.stopPropagation()
    const valueSearch = event.target.children[0].value

    if(!valueSearch){
        alert('Por Favor digite o nome do produto para pesquisar')
        return
    }
    
    localStorage.setItem('pesquisa',valueSearch)
    product.pesquisa = Object.values(product).flat().filter(e => e.name.toLowerCase().includes(valueSearch.toLowerCase()))
    window.location.href = `${window.location.origin}/src/pages/pesquisa.html`
    
    
})

if(window.location.pathname.split('/').slice(-1)[0].replace('.html','') == 'pesquisa' ){   
    product.pesquisa = Object.values(product).flat().filter(e => e.name.toLowerCase().includes(localStorage.getItem('pesquisa').toString().toLowerCase()))
    loadProducts('pesquisa')
}



  var route = window.location.pathname.split('/').slice(-1)[0].replace('.html','')
// if( route != 'produto')
// loadProducts(route)