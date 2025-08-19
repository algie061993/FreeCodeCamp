const outPut = document.getElementById("out-put");
const button = document.getElementById("button-id");

const arrat = [
  {
    name: "John",
    age: 30,
    city: "New York",
  },
  {
    name: "Jane",
    age: 25,
    city: "Los Angeles",
  },
  {
    name: "Bob",
    age: 35,
    city: "Chicago",
  },
];

function displayArray(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  outPut.innerHTML = `<p>Name: ${arr[randomIndex].name}</p><p>Age: ${arr[randomIndex].age}</p><p>City: ${arr[randomIndex].city}</p>`;
}

button.addEventListener("click", () => {
  displayArray(arrat);
});
