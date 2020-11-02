
const HEX  = 'abcdef0123456789'
let currentElement

const generateColor = () => {
    let color = '#'

    for(let i=0; i < 6; i++) {
        color += HEX[Math.floor(Math.random() * HEX.length)]
    }

    return color
}

const generateColorPalette = () => {

    deletePalette()
    for(let i = 0 ; i < 5; i ++) {
        createPalette()
    }
}

const createPalette = () => {
    let palette = document.getElementById('palette')

    let li = document.createElement('li')
    let spanBackground = document.createElement('span')
    let spanBackgroundText = document.createElement('span')
    let textInput = document.createElement('input')
    let color = generateColor()

    textInput.name = 'color'
    textInput.value = color
    spanBackground.style.backgroundColor = color
    spanBackground.className = 'background'
    spanBackgroundText.innerText = color
    spanBackgroundText.className = 'color'

    li.appendChild(spanBackground)
    li.appendChild(spanBackgroundText)
    li.appendChild(textInput)
    
    li.onclick = (e) => {
        let targetInput = e.target.parentNode.querySelector('input[name="color"]');
        targetInput.select();
        document.execCommand('copy');
        notification('Color <b>' + targetInput.value  + '</b> copied to your clipboard')

    }

    li.onmouseover = (e) => {
        currentElement = e.target.parentNode;
    }
    palette.appendChild(li)
}

const deletePalette =  () => {
    let palette = document.getElementById('palette')

    if(palette) palette.innerHTML = ''

}




window.addEventListener('keypress', (e) => {
    debugger

    if(e.keyCode === 103) {
        generateColorPalette()
    } else if (e.keyCode === 99 && currentElement){
        console.log(currentElement)
        let targetInput = currentElement.querySelector('input[name="color"]');
        targetInput.select();
        document.execCommand('copy');
        notification('Color <b>' + targetInput.value  + '</b> copied to your clipboard');
    }

    e.preventDefault()
})

const notification = (msg, className='alert') => {
    
    let oldDiv = document.querySelector('.alert')

    if(oldDiv) {
        oldDiv.parentNode.removeChild(oldDiv)
    }

    let div = document.createElement('div')

    div.className = className
    div.innerHTML = msg

    document.body.appendChild(div)

    setTimeout(() => div.classList.add('active'), 1);
    setTimeout(() => div.classList.remove('active'), 1000);
}