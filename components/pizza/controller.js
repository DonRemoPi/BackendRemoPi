const store = require('./store');
// const { validationResult } = require('express-validator');

const getPizzas = () => {
  return new Promise((resolve, reject) => {
      resolve(store.list());
  })
}
const getPizzaById = (id) => {
  return new Promise((resolve, reject) => {
    store.get(id)
      .then((pizza) => {
        if (!pizza) {
          reject(`Pizza with id ${id} not found`);
        } else {
          resolve(pizza);
        }
      })
      .catch((error) => reject(error));
  });
};

const addPizza = (name, toppings, price, file) => {
  return new Promise((resolve, reject) => {
    if (!name || !toppings || !price) {
      console.error('[messageController] Faltan datos de la pizza');
      reject('Los datos son incorrectos');
      return false;
    }

    let fileUrl = '';
    if(file) {
      fileUrl = 'http://localhost:3000/app/files/'
    }

    const newPizza = {
      name: name,
      toppings: toppings,
      price: price,
      file: fileUrl,
    };

    console.log(name, toppings, price, file);


    store
      .add(newPizza)
      .then((addedPizza) => resolve(addedPizza))
      .catch((error) => reject(error));
  });
};

const changeOfPizza = (id, name, toppings, price) => {
  return new Promise((resolve, reject) => {
    store.update(id, { name, toppings, price })
      .then((pizza) => {
        if (!pizza) {
          reject(`Pizza with id ${id} not found`);
        } else {
          resolve(pizza);
        }
      })
      .catch((error) => reject(error));
  });
};

const deletePizza = (id) => {
  return new Promise((resolve,reject)=>{
    store.remove(id)
      .then(() => {
        if (id) {
          console.log('Pizza eliminada');
          resolve('Pizza eliminada');
        } else {
          console.log('Pizza no encontrada');
          reject('Pizza no encontrada');
        }
      })
      .catch((error) => reject(error));
  });
};


module.exports = {
  getPizzas,
  addPizza,
  getPizzaById,
  changeOfPizza,
  deletePizza
};
