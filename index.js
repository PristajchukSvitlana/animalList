const animalsList = [
    [`turtle`, `🐢`],
    [`octopus`, `🐙`],
    [`fish`, `🐠`],
    [`flamingo`, `🦩`],
    [`penguin`, `🐧`],
];

function getList(arr) {
    JSON.parse(JSON.stringify(arr))
    console.log(arr)

    arr.forEach(element => {
        console.log(element)
    });

}
console.log(animalsList)
let renderList = getList(animalsList)

//console.log(renderList)