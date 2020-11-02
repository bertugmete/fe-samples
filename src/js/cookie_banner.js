function findPositionClass (className) {
    if(className.startsWith('position-')) {
        return className
    }
}

function colorChange(e) {
    let classList = document.querySelector('.cookie__container').classList
    if(e.value === 'light') {
        classList.remove('dark')
        return
    }
    document.querySelector('.cookie__container').classList.add('dark')
}


function positionChange(e) {
        let classArray = [...document.querySelector('.cookie__container').classList]
        let result = classArray.find(findPositionClass)
        let classList = document.querySelector('.cookie__container').classList
        classList.remove(result)
        classList.add(`position-${e.value}`)
}