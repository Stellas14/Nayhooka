var product = 
{
    index:[{
        id:1,
        name:'Narguiles Anubis',
        price:'290,00',
        pathImg:'../assets/img/vaso2.png'
    },{
        id:2,
        name:'Pack Ziggy - 10 unidades',
        price:'75,00',
        pathImg:'../assets/img/essencia.png'
    },{
        id:3,
        name:'Cesta de narguile',
        price:'300,00',
        pathImg:'../assets/img/cesta.png'
    },{
        id:4,
        name:'Narguiles Anubis',
        price:'280,00',
        pathImg:'../assets/img/Maisvendidosazul.png'
    }],
    promocoes:[],
    narguiles:[{
        id:1,
        name:'Narguiles Anubis',
        price:'290,00',
        pathImg:'../assets/img/vaso2.png'
    },
    {
        id:2,
        name:'Pack Anúbis',
        price:'300,00',
        pathImg:'../assets/img/narguile.rosaclaro.png'
    },
    {
        id:3,
        name:'Narguiles Anubis',
        price:'280,00',
        pathImg:'../assets/img/Maisvendidosazul.png'
    },
    {
        id:4,
        name:'Narguiles Anubis',
        price:'290,00',
        pathImg:'../assets/img/vasopreto.png'
    },
    {
        id:5,
        name:'Narguiles Anubis',
        price:'290,00',
        pathImg:'../assets/img/vasotodovermelho.png'
    },
    {
        id:6,
        name:'Narguiles Anubis',
        price:'290,00',
        pathImg:'../assets/img/vasoazulebranco.png'
    },
    {
        id:7,
        name:'Cesta de narguile',
        price:'290,00',
        pathImg:'../assets/img/cesta.png'
    },
    {
        id:8,
        name:'Narguiles Anubis',
        price:'290,00',
        pathImg:'../assets/img/vaso2.png'
    }],
    acessorios:[{
        id:1,
        name:'Pegador saca roch grande',
        price:'17,00',
        pathImg:'../assets/img/acessoriopegador.png'
    },
    {
        id:2,
        name:'Fogareiro grande 110v',
        price:'35,00',
        pathImg:'../assets/img/fogareirogrande.png'
    },
    {
        id:3,
        name:'Roch Seven',
        price:'50,00',
        pathImg:'../assets/img/Rochseven.png'
    },
    {
        id:4,
        name:'Piteira Simples',
        price:'15,00',
        pathImg:'../assets/img/piteira.png'
    },
    {
        id:5,
        name:'Essência Nay',
        price:'12,00',
        pathImg:'../assets/img/essencianay.png'
    },
    {
        id:6,
        name:'Prato Wire',
        price:'15,00',
        pathImg:'../assets/img/pratowire.png'
    },],
    pesquisa:[],

}

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
    


    // const request = indexedDB.open("NayDB", 1);
    // request.onsuccess = function () {
    //     db = request.result;

    //     const transaction = db.transaction(["carrinho",
    //     "produtoSelecionado",
    //     "index",
    //     "promocoes",
    //     "narguiles",
    //     "acessorios",
    //     "pesquisa"], "readwrite");
      
    //     //2        
    //     const narguiles = transaction.objectStore("narguiles").getAll();
    //     const acessorios = transaction.objectStore("acessorios").getAll();
    //     const pesquisa = transaction.objectStore("pesquisa").getAll();

    //     narguiles.onsuccess = function(){
    //         acessorios.onsuccess = function(){
    //             pesquisa.onsuccess = function(){

    //             }
    //         }
    //     }
        
       


        localStorage.setItem('pesquisa',valueSearch)
        // product.pesquisa = Object.values(product).flat().filter(e => e.name.toLowerCase().includes(valueSearch.toLowerCase()))
        window.location.href = `${window.location.origin}/src/pages/pesquisa.html`


    //}
  
    
    
})

if(window.location.pathname.split('/').slice(-1)[0].replace('.html','') == 'pesquisa' ){   

    product.pesquisa = Object.values(product).flat().filter(e => e.name.toLowerCase().includes(localStorage.getItem('pesquisa').toString().toLowerCase()))
    loadProducts('pesquisa')
}



  var route = window.location.pathname.split('/').slice(-1)[0].replace('.html','')
if( route == 'pesquisa')
loadProducts(route)