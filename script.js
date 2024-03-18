const messageGenerator = {
    arr1: ['not going', 'definately going', 'unlikely', 'highly likely'],
    arr2: ['die', 'be rich', 'age well', 'be healthy'],
    arr3: ['be powerful', 'peaceful', 'live long']
}

//console.log(messageGenerator.arr1[Math.floor(Math.random()* messageGenerator.arr1.length)])//

const message = () => {
 return `You are ${messageGenerator.arr1[Math.floor(Math.random()* messageGenerator.arr1.length)]} to ${messageGenerator.arr2[Math.floor(Math.random()* messageGenerator.arr2.length)]} and ${messageGenerator.arr3[Math.floor(Math.random()* messageGenerator.arr3.length)]}.`
}
console.log(message())