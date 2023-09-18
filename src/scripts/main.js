'use strict';

const people = require('./lib/people');

const tableElement = document.querySelector('.dashboard');

for (const person of people) {
  const tableRowElement = document.createElement('tr');

  tableRowElement.innerHTML = `
    <td>${person.name}</td>
    <td>${person.sex === 'f' ? 'Female' : 'Male'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>`;

  tableElement.append(tableRowElement);
}
