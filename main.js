/* Create an object representing your breakfast.
Write a function that will accept your breakfast object and return a component. Display the component on the DOM along with your name. You will need index.html and main.js.*/


const breakfast = {
      name: 'I woke up early enough to make this',
      authorName: 'Dylan Griffith',
      main: 'eggs',
      side: 'sausage',
      toast:'gluten-free wheat',
      beverage: 'apple juice'
}


const breakfastFunction = (item) => {
  return `
    <div>
      <h1>${item.name}</h1>
      <h2>${item.authorName}</h2>
      <p>${item.main}</p>
      <p>${item.side}</p>
      <p>${item.toast}</p>
      <p>${item.beverage}</p>
    </div>
`

}

let breakfastCollection= []

breakfastCollection.push(breakfast)
const breakfastContainer = document.querySelector('#container')

for (let i = 0; i < breakfastCollection.length; i++){
  breakfastContainer.innerHTML += breakfastFunction(breakfastCollection[i])

}
console.log(breakfastFunction(breakfast));
