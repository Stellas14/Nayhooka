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

const valueSearch = localStorage.getItem('pesquisa')

product.pesquisa = Object.values(product).flat().filter(e => e.name.toLowerCase().includes(valueSearch.toLowerCase()))

const mainDiv = document.querySelector('#gridProdutos')
mainDiv.innerHTML = product.pesquisa.map(e => `
<a href="./produto.html" onclick="selecionarProduto(${JSON.stringify(e).toString().replaceAll('"', '\'')})" class="col-3">
<div class="produto">
    <img class='img-responsive' src="${e.pathImg}" id="${e.name + e.id}">
    <p>${e.name}</p>
    <p><strong>R$${e.price}</strong></p>
</div>
</a>`).join('')