const request = indexedDB.open("NayDB", 1);

request.onsuccess = function () {
    const db = request.result
    const transection = db.transaction("carrinho", "readwrite")
    produtos = transection.objectStore("carrinho").getAll()

    produtos.onsuccess = function () {
        produtos = produtos.result
        const mainDiv = document.querySelector('#detalhesPedido')
        mainDiv.innerHTML = mainDiv?.innerHTML + produtos.map(e => `
        <p>${e.quantidade}x - ${e.name} - R$${e.price}</p>`).join('')

        document.querySelector('#endereco').innerHTML = 'Endereço: ' + (localStorage.getItem('endereco') ?? 'Rua Test,123' )
    
        document.querySelector('#Total').innerHTML = `Total: R$${produtos.reduce((a,e) => {return parseFloat(e.price )+ a},0 )}`
        
    }



}

var FinalizarCompra=()=>{

    const db = request.result
    const transection = db.transaction("carrinho", "readwrite")
    produtos = transection.objectStore("carrinho").clear()

    produtos.onsuccess = function () {
        document.querySelector('#sucessCompra').classList.add('d-flex')
    }

    
}