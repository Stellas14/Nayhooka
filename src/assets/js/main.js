
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
var dbNames = ["carrinho",
    "produtoSelecionado",
    "index",
    "promocoes",
    "narguiles",
    "acessorios",
    "pesquisa"]

const request = indexedDB.open("NayDB", 1);

request.onupgradeneeded = function () {
    //1
    const db = request.result;
  
    //2
       dbNames.forEach(e =>{
        if(![...db.objectStoreNames].includes(e)){
            db.createObjectStore(e, { keyPath: "id" });
        }
    })

    // db.createObjectStore("carrinho", { keyPath: "id" });
    
};

request.onsuccess = function () {
    console.log("Database opened successfully");
    db = request.result;
    // dbNames.forEach(e =>{
    //     if(![...db.objectStoreNames].includes(e)){
    //         db.createObjectStore(e, { keyPath: "id" });
    //     }
    // })
    

    // db.createObjectStore("teste", { keyPath: "id" });

    // 1
    const transaction = db.transaction(["carrinho",
    "produtoSelecionado",
    "index",
    "promocoes",
    "narguiles",
    "acessorios",
    "pesquisa"], "readwrite");
  
    //2
    const carrinho = transaction.objectStore("carrinho");
    const index = transaction.objectStore("index");
    const narguiles = transaction.objectStore("narguiles");
    const acessorios = transaction.objectStore("acessorios");
    const pesquisa = transaction.objectStore("pesquisa");
  
    //3
    product.index.forEach(e => {
        index.put(e)
    })
    product.narguiles.forEach(e => {
        narguiles.put(e)
    })
    product.acessorios.forEach(e => {
        acessorios.put(e)
    })

    product.pesquisa.forEach(e => {
        pesquisa.put(e)
    })



    // produtos.put(product);
    //4
     const idQuery = index.get(1);
  
    // 5
    idQuery.onsuccess = function () {
      console.log('idQuery', idQuery.result);
    };
   
    const objectStore = transaction.objectStore("index")
  
    produtos = objectStore.getAll()
  
    produtos.onsuccess = function () {
      produtos = produtos.result
  
      const mainDiv = document.querySelector('#gridProdutos')
      mainDiv.innerHTML = mainDiv?.innerHTML + produtos.map(e => `
      <a href="../pages/produto.html" onclick="selecionarProduto(${JSON.stringify(e).toString().replaceAll('"','\'')})" class="col-3">
      <div class="produto">
          <img class='img-responsive' src="${e.pathImg}" id="${e.name + e.id}">
          <p>${e.name}</p>
          <p><strong>R$${e.price}</strong></p>
      </div>
      </a>`).join('')
    };
  
  
    transaction.oncomplete = function () {
      db.close();
    };
  
    // 6
    transaction.oncomplete = function () {
      db.close();
    };
};

var selecionarProduto = (element)=>{
    const request = indexedDB.open("NayDB", 1);
    request.onsuccess = function(){
        const db = request.result
        const transaction = db.transaction('produtoSelecionado', "readwrite");
        transaction.objectStore("produtoSelecionado").clear()
        const produtoSelecionado = transaction.objectStore("produtoSelecionado");
        produtoSelecionado.put(element)
        window.location.href = `${window.location.origin }/src/pages/produto.html`

        
    }
   
    console.log(element)

}


loadCarrinho()