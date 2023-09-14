const animalsList = [
    [`turtle`, `🐢`],
    [`octopus`, `🐙`],
    [`fish`, `🐠`],
    [`flamingo`, `🦩`],
    [`penguin`, `🐧`],
];
//console.log(animalsList)

function renderItems(arr) {
    const newArr = (JSON.parse(JSON.stringify(arr)))
    console.log(newArr) // створюємо  копію масиву

    setTimeout(() => {

        newArr.forEach(el => {
            console.log(el)
            currentStr = `
            <p>${el[0]}:${el[1]}</p>`
            console.log(currentStr)
            return newArr.push(currentStr) // add a created el for newArr
        }); //перебираємо масив
        console.log(newArr)
        return document.write(`<div>
        ${newArr.join(``)}
        </div>`
        )
    }, 2000)


}

const renderList = renderItems(animalsList) // викликаємо цю функцію
console.log(renderList)