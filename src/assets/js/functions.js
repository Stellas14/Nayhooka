var loadCarrinho = ()=>{
    const request = indexedDB.open("NayDB", 1);
    request.onsuccess = function(){
        const db = request.result;
        const transection = db.transaction(["carrinho"], "readwrite");
        const busca =  transection.objectStore('carrinho')
        const listCarrinho = document.querySelector('#listCarrinho')    
        test = busca.getAll()
        test.onsuccess = function(){
            if(test.result.length > 0){
                listCarrinho.innerHTML = test.result.map(e => `
                <p> ${e.name} - ${e.quantidade}</p>
        
                `).join('')
            }else{

            }
          
            console.log(test.result)
        }
    }
 
}

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
