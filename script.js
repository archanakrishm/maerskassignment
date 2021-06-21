/*
 Javascript 
*/

const list = document.getElementById('number-list');

// console.log([list.children]) output [HTMLCollection(9)]
// console.log([...list.children]) output (9) [li.list-1, li.list-2, li.list-3, li.list-4, li.list-5, li.list-6, li.list-7, li.list-8, li.list-9]

const ascending = (a, b) => {
  if (a.innerText < b.innerText) return -1; // a should come before b
  if (a.innerText > b.innerText) return 1; // b should come before a
  return 0; // if a == b
}

const descending = (a, b) => {
  if (a.innerText > b.innerText) return -1;
  if (a.innerText < b.innerText) return 1;
  return 0;
}

const shuffle = array => {
  for (let a = array.length - 1; a > 0; a--) {
    const b = Math.floor(Math.random() * (a + 1));
    [array[a], array[b]] = [array[b], array[a]]; // swapping array elements
  } 
  return array;
}

sortNumbers = () => {
  [...list.children] // spread operator to make all the elements of the array in the same level
  .sort((ascending)) 
    .forEach(node => list.appendChild(node));
};

shuffleNumbers = () => {
  shuffle([...list.children])
    .forEach(node => list.appendChild(node));
};