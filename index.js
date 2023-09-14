const animalsList = [
    [`turtle`, `🐢`],
    [`octopus`, `🐙`],
    [`fish`, `🐠`],
    [`flamingo`, `🦩`],
    [`penguin`, `🐧`],
];
//console.log(animalsList)

function renderItems(arr, el) {
    JSON.parse(JSON.stringify(arr))
    //console.log(arr) // створюємо  копію масиву

    arr.forEach(el => {
        console.log(el)
        currentStr = `
        <p>${el[0]}:${el[1]}</p>`
        console.log(currentStr)
        return arr.push(currentStr)
    }); //перебираємо масив
    console.log(arr)



    return document.write(`<table> 
    ${arr.join(``)}
    </table>`)
}

const renderList = renderItems(animalsList) // викликаємо цю функцію
console.log(renderList)