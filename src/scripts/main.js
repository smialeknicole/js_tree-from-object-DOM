'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  Object.keys(data).forEach((key) => {
    const lista = document.createElement('li');

    lista.textContent = key;
    element.append(lista);

    if (Object.keys(data[key]).length > 0) {
      const podpunkt = document.createElement('ul');

      lista.append(podpunkt);
      createTree(podpunkt, data[key]);
    }
  });
}

createTree(tree, food);
