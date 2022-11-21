
const request = indexedDB.open("NayDB", 1);

request.onsuccess = function () {
    const db = request.result;
    const transection = db.transaction(["produtoSelecionado","carrinho"], "readwrite");
    
    const busca = transection.objectStore("produtoSelecionado").getAll()

    busca.onsuccess = function(){
        const mainDiv = document.querySelector('#container')

        const template = `
        <div class="row">
        <div class="col-6">
        <img class='img-responsive imgTelaProduto' src="${busca.result[0].pathImg}" id="narguilerosaclaro">
        <h2>R$${busca.result[0].price}</h2>
        </div>
        <div class="col-6 asideProduto">
        <h2>${busca.result[0].name}</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div class="row mt-5">
            <div>
            <input min="1" max="99" value="1" class="col-1 mb-5 me-1" type="number"><label>Quantidade</label>
            </div>
            
            <button onclick="adicionarCarrinho" class="mt-5" class="col-12 btn">Adicionar no carrinho</button>
        </div>
        </div>
        </div>
        `
    
        mainDiv.innerHTML = mainDiv.innerHTML + template

        
    }


}


const adicionarCarrinho = () => {

}

