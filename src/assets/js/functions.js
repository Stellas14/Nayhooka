var loadCarrinho = ()=>{
    const request = indexedDB.open("NayDB", 1);
    request.onsuccess = function(){
        const db = request.result;
        const transection = db.transaction(["carrinho"], "readwrite");
        const busca =  transection.objectStore('carrinho')
        const listCarrinho = document.querySelector('#listCarrinho')    
        test = busca.getAll()
        test.onsuccess = function(){
            console.log(test.result)
            listCarrinho.innerHTML = test.result.map(e => `
            <p> ${e.name} - ${e.quantidade}</p>
    
            `).join('')
            console.log(test.result)
        }
    }
 
}