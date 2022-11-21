
const request = indexedDB.open("NayDB", 1);

request.onsuccess = function () {
    const db = request.result
    const transection = db.transaction("acessorios", "readwrite")
    produtos = transection.objectStore("acessorios").getAll()

    produtos.onsuccess = function () {
        produtos = produtos.result

        const mainDiv = document.querySelector('#gridProdutos')
        mainDiv.innerHTML = mainDiv?.innerHTML + produtos.map(e => `
        <a href="../pages/produto.html" onclick="selecionarProduto(${JSON.stringify(e).toString().replaceAll('"', '\'')})" class="col-3">
        <div class="produto">
            <img class='img-responsive' src="${e.pathImg}" id="${e.name + e.id}">
            <p>${e.name}</p>
            <p><strong>R$${e.price}</strong></p>
        </div>
        </a>`).join('')
    }

}



