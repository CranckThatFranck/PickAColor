
//Arrays de cores disponíveis para trocar
const colors = ['Red', 'Blue', 'black', 'Yellow', 'lightGreen', 'Purple', 'Green']
// Variável que carrega o clique do botão no HTML
const btn = document.getElementById('btn')
//Criar variável que irá injetar no "span", sem criar um ID
const color = document.querySelector('.color')

// ao invés do HTML enviar para o JS, o JS escuta quando o click
// é carregado na variável
btn.addEventListener('click', function() {

        // Variável registrando a cor randômica criada na função abaixo
        const randomColor = getRandomColor()    
        document.body.style.background = colors[randomColor]

        //document.getElementById('theColor').innerHTML = colors[randomColor]
        
        //Atrelando o randomColor ao const color
        color.textContent = colors[randomColor]
    }    
)

// Gerar número randomico
function getRandomColor() {
    //Math.floor arredonda o número gerado pelo Math.random
    return Math.floor(Math.random() * colors.length)
    // Math.random() * colors.lenght pega o valores de itens em colors
}