var balls = document.querySelector('.balls')
var qtde = document.querySelectorAll('.slides .image')
var atual = 0
var imagem = document.getElementById('image_atual)')
var back = document.getElementById('back')
var next = document.getElementById('next')
var rolar = true

for (let i = 0; i < qtde.length; i++) {
    var div = document.createElement('div')
    div.id = i
    balls.appendChild(div)
}

document.getElementById('0').classList.add('imgAtual')

var pos = document.querySelectorAll('.balls div')

for (let i = 0; i < pos.length; i++) {
    pos[i].addEventListener('click', () => {
        atual = pos[i].id
        rolar = false
        carousel()
    })
}

back.addEventListener('click', () => {
    atual--
    rolar = false
    carousel()
})

next.addEventListener('click', () => {
    atual++
    rolar = false
    carousel()
})

function carousel() {
    if (atual >= qtde.length) {
        atual = 0
    } else if (atual < 0) {
        atual = qtde.length - 1
    }
    document.querySelector('.imgAtual').classList.remove('imgAtual')
    imagem.style.marginLeft = -1024 * atual + 'px'
    document.getElementById(atual).classList.add('imgAtual')
}
setInterval(() => {
    if (rolar) {
        atual++
        carousel()
    } else {
        rolar = true
    }
}, 2000)