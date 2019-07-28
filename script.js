
//check the js file is linked to the html file
console.log("linked");

//create variables for required elements
const gridmaker = document.querySelector("#gridbutton");
const gridformvar = document.querySelector("#gridform");


//Create render function

const render = () => {
  const html = "";

};
render();


//add an event listener to the button

gridmaker.addEventListener('click', (ev) => {

  console.log("button is working");

});

gridformvar.addEventListener('submit', (ev) => {
ev.preventDefault();
});
