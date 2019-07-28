
//check the js file is linked to the html file
console.log("JS script linked");

//create variables for required elements
const gridmaker = document.querySelector("#gridbutton");
const gridformvar = document.querySelector("#gridform");
const box1 = document.querySelector('#box1');
const box2 = document.querySelector('#box2');
const gridHolder = document.querySelector("#grid-layout");

//Create render function

const render = () => {
  const html = "";

};
render();


//add an event listener to the button

gridmaker.addEventListener('click', (ev) => {

  console.log("button is working");
  createGrid()
});

gridformvar.addEventListener('submit', (ev) => {
ev.preventDefault();
});

function createGrid() {
console.log("create grid function ran");
console.log("box1 * box2 = ", Number(box1.value) * Number(box2.value));

let gridhtml = ""

for (let i=0;i<box1.value;i++) {
  gridhtml += "<div class='grid-square'></div>";
};

gridHolder.innerHTML = gridhtml;

}
