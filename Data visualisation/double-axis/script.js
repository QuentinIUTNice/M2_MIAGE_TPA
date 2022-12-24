import dataJson from './catalogue.json' assert {type: 'json'};

let categoryArray = [...new Set(dataJson.map(item => item.category))];

//For each item of categoryArray, create a new option in the select
categoryArray.forEach(category => {
  const $option = document.createElement('option');
  $option.value = category;
  $option.innerHTML = category;
  if (category === categoryArray[0]) {
    $option.selected = true;
  }
  document.querySelector('#select').appendChild($option);
});

//Get the category from the URL
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

//If there is no category in the URL, use the first category of the array
let category = params.category || categoryArray[0];
document.getElementById('category').innerHTML = category;

const $select = document.querySelector('#select');
$select.value = category;

//Add an event listener to the select
document.querySelector('#select').addEventListener('change', (event) => {
  window.location.search = `?category=${event.target.value}`;
});

//Get objects from the data.json file where category is equal to the category selected
let dataCategory = dataJson.filter(item => item.category === category);
let brandToShow = [...new Set(dataCategory.map(item => item.marque))];

//Get the average price of each brand
let averagePrice = [];
brandToShow.forEach(brand => {
  let price = dataCategory.filter(item => item.marque === brand).map(item => item.prix);
  let sum = price.reduce((a, b) => a + b, 0);
  let avg = (sum / price.length) || 0;
  averagePrice.push(avg);
});

//Get the average CO2 of each brand
let averageCO2 = [];
brandToShow.forEach(brand => {
  let co2 = dataCategory.filter(item => item.marque === brand).map(item => item.rejetCO2);
  let sum = co2.reduce((a, b) => a + b, 0);
  let avg = (sum / co2.length) || 0;
  averageCO2.push(avg);
});

//Get the average puissance of each brand
let averagePuissance = [];
brandToShow.forEach(brand => {
  let puissance = dataCategory.filter(item => item.marque === brand).map(item => item.puissance);
  let sum = puissance.reduce((a, b) => a + b, 0);
  let avg = (sum / puissance.length) || 0;
  averagePuissance.push(avg);
});

let bar_ctx = document.getElementById('myChart').getContext('2d');
var backgroundCo2 = bar_ctx.createLinearGradient(0, 0, 0, 600);
backgroundCo2.addColorStop(0, 'red');
backgroundCo2.addColorStop(1, 'green');
backgroundCo2.addColorStop(0.5, 'orange');

// setup 
const data = {
  labels: brandToShow,
  datasets: [{
    label: 'Puissance en CV',
    data: averagePuissance,
    backgroundColor: 'rgba(250, 209, 245, 0.7)',
    borderColor: 'rgba(250, 209, 245, 0.7)',
    borderWidth: 1,
    yAxisID: 'puissance'
  }, {
    label: 'Moyenne des prix des vehicules en euros',
    data: averagePrice,
    backgroundColor: 'rgba(39, 209, 245, 0.5)',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    yAxisID: 'price'
  }, {
    label: 'Moyenne des rejets de CO2 en grammes',
    data: averageCO2,
    backgroundColor: backgroundCo2,
    borderColor: backgroundCo2,
    borderWidth: 1,
    yAxisID: 'co2'
  }]
};

// config 
const config = {
  type: 'bar',
  data,
  options: {
    scales: {
      puissance: {
        type: 'linear',
        position: 'left',
      },
      price: {
        type: 'linear',
        position: 'right',
        grid: {
          display: false
        },
      },
      co2: {
        type: 'linear',
        position: 'right',
        grid: {
          display: false
        },
      }
    }
  }
};

// render init block
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);