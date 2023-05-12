const store = require('./store');
// const { validationResult } = require('express-validator');

const getEmpanadas = () => {
  return new Promise((resolve, reject) => {
      resolve(store.list());
  })
}
const getEmpandaById = (id) => {
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

const addEmpanada = (name, toppings, price) => {
  return new Promise((resolve, reject) => {
    if (!name || !toppings || !price) {
      console.error('[messageController] Faltan datos de la pizza');
      reject('Los datos son incorrectos');
      return;
    }

    const newEmpanadas = {
      name,
      toppings,
      price,
    };

    store
      .add(newEmpanadas)
      .then((addedEmpanada) => resolve(addedEmpanada))
      .catch((error) => reject(error));
  });
};

const changeOfEmpanada = (id, name, toppings, price) => {
  return new Promise((resolve, reject) => {
    store.update(id, { name, toppings, price })
      .then((empanada) => {
        if (!empanada) {
          reject(`Empanada with id ${id} not found`);
        } else {
          resolve(empanada);
        }
      })
      .catch((error) => reject(error));
  });
};

const deleteEmpanada = (id) => {
  return new Promise((resolve,reject)=>{
    store.remove(id)
      .then(() => {
        if (id) {
          console.log('Empanada eliminada');
          resolve('Empanada eliminada');
        } else {
          console.log('Empanada no encontrada');
          reject('Empanada no encontrada');
        }
      })
      .catch((error) => reject(error));
  });
};




module.exports = {
  getEmpanadas,
  addEmpanada,
  getEmpandaById,
  changeOfEmpanada,
  deleteEmpanada
};
