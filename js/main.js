// función que genera booleanos aleatorios
const randomBool = () => {
    return Math.random() < 0.5
}

// CREAR DINÁMICAMENTE CON ARRAY AUXILIAR EN CÓDIGO


// Definimos un array vacío y pedimos una cantidad y rellenamos el array con tantos booleanos aleatorios como nos den
// let buttons = []
// const createButtons = () => {
//     let amount = prompt('Elige un número natural entre 3 y 10. No trolees, que no he validado el input.')
//     for (let i=0; i< amount; i++) {
//         buttons[i] = randomBool()
//     }

// iteramos sobre el array, creando un botón para cada elemento que tendrá id = button_X siendo X la posición que ocupa en el array
// y definiendo su propiedad 'checked' según el valor booleano que corresponda. 
// Esta propiedad en HTML SOLO DEFINE EL ESTADO INICIAL Y NO ES INTERACTIVA
//     buttons.forEach((ischecked, position) => {
//         document.querySelector('.boardContainer').innerHTML += `<label class="toggle">
//         <input type="checkbox" class="toggle-input" id="button_${position}" onclick="shuffleButtons(${position}, ${amount})" ${ischecked ? 'checked' : ''}>
//         <span class="toggle-slider"></span>
//     </label>`
//     })
//     document.getElementById('resetButton').addEventListener('click', resetButtons)

// }
// const resetButtons = () => {
//     buttonsToReset = document.querySelectorAll('.toggle')
//     buttonsToReset.forEach(button => {
//         if (button.classList.contains('toggle')) {
//             button.remove()}
//     })
//     buttons = []
//     createButtons()
// }

// createButtons()


// CREAR DINÁMICAMENTE A PELO

// Misma idea que antes, pero ahora iteramos directamente con un bucle "for" tantas veces como la cantidad pedida

const createButtonsNoArray = () => {
    let amount = prompt('Cantidad de botones?? No vaciles, mete un número natural')
    for (let position=0; position<amount; position++) {
        const isThisButtonChecked = randomBool()

        document.querySelector('.boardContainer').innerHTML += `<label class="toggle">
        <input type="checkbox" class="toggle-input" id="button_${position}" onclick="shuffleButtons(${position}, ${amount})" ${isThisButtonChecked ? 'checked' : ''}>
        <span class="toggle-slider"></span>
        </label>`
    }
    document.getElementById('resetButton').addEventListener('click', resetButtonsNoArray)
}

const resetButtonsNoArray = () => {
    buttonsToReset = document.querySelectorAll('.toggle')
    buttonsToReset.forEach(button => {
        if (button.classList.contains('toggle')) {
            button.remove()}
    })
    createButtonsNoArray()
}


createButtonsNoArray()


// Esta función es llamada cada vez que apretamos un botón. Recibe como argumentos el botón pulsado y la cantidad de botones, e itera sobre todos los botones.
// Para los que sean DISTINTOS del que hemos pulsado, asigna un booleano aleatorio a su estado dinámico .checked. Si la usáramos con la versión con array, deberíamos
// ampliarla para que primero actualizara los valores del array, y después actualizara el DOM basándose en el array. 

const shuffleButtons = (pressedButton, amount) => {
    for (let button=0; button<amount; button++) {
        if (button !== pressedButton) {
            const randomState = randomBool()
            document.querySelector(`#button_${button}`).checked = randomState
        }
    }
}
