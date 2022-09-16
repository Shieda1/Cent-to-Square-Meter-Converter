// https://www.omnicalculator.com/conversion/cent-to-square-meter-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const squaremeterRadio = document.getElementById('squaremeterRadio');
const centRadio = document.getElementById('centRadio');

let squaremeter;
let cent = v; 

// labels of the inpust
const variable = document.getElementById('variable');

squaremeterRadio.addEventListener('click', function() {
  variable.textContent = 'Cent';
  cent = v;
  result.textContent = '';
});

centRadio.addEventListener('click', function() {
  variable.textContent = 'Square meter';
  squaremeter = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(squaremeterRadio.checked)
    result.textContent = `Square meter = ${computesquaremeter().toFixed(5)}`;

  else if(centRadio.checked)
    result.textContent = `Cent = ${computecent().toFixed(5)}`;
})

// calculation

function computesquaremeter() {
  return Number(cent.value) * 40.468564224;
}

function computecent() {
  return Number(squaremeter.value) / 40.468564224;
}