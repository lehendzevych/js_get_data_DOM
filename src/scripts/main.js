'use strict';

const populationItems = [...document.querySelectorAll('.population')];
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const normalize = str => str.toLocaleString('en-US');

const totalPopulation = populationItems.reduce(
  (acc, item) => acc + +item.innerText.replace(/,/g, ''), 0
);

total.innerText = normalize(totalPopulation);
average.innerText = normalize(totalPopulation / populationItems.length);
