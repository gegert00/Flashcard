function criaCartao(categoria,pergunta,resposta) {
    let container=document.getElementById('container')
    let cartao= document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerhTML = `
    <div class="cartao_conteudo">
        <h3>${categoria}</h3>
        <div class="cartao_conteudo_pergunta">
            <p>O que é JavaScriptw</p>
        </div>
        <div class="cartao_conteudo_resposta">
            <p>O JavaScript é uma linguagem de programação</p>
        </div>
    </div>

`
let respostaEstaVisivel= false

function viraCartao (){
    respostaEstaVisivel = !respostaEstaVisivel
    cartao.classList.toggle('active', respostaEstaVisivel)
}
cartao.addEventlistener ('click',viraCartao)
container.appendChild(cartao)

container.appendChild(cartao)
}

