const store = require('./store');
// const { validationResult } = require('express-validator');

const getPostres = () => {
  return new Promise((resolve, reject) => {
      resolve(store.list());
  })
}
const getPostreById = (id) => {
  return new Promise((resolve, reject) => {
    store.get(id)
      .then((postre) => {
        if (!postre) {
          reject(`Postre with id ${id} not found`);
        } else {
          resolve(postre);
        }
      })
      .catch((error) => reject(error));
  });
};

const addPostres = (name, toppings, price) => {
  return new Promise((resolve, reject) => {
    if (!name || !toppings || !price) {
      console.error('[messageController] Faltan datos de la pizza');
      reject('Los datos son incorrectos');
      return;
    }

    const newPostres = {
      name,
      toppings,
      price,
    };

    store
      .add(newPostres)
      .then((addedPostres) => resolve(addedPostres))
      .catch((error) => reject(error));
  });
};

const changeOfPostre = (id, name, toppings, price) => {
  return new Promise((resolve, reject) => {
    store.update(id, { name, toppings, price })
      .then((postre) => {
        if (!postre) {
          reject(`Postre with id ${id} not found`);
        } else {
          resolve(postre);
        }
      })
      .catch((error) => reject(error));
  });
};

const deletePostre = (id) => {
  return new Promise((resolve,reject)=>{
    store.remove(id)
      .then(() => {
        if (id) {
          console.log('Postre eliminado');
          resolve('Postre eliminado');
        } else {
          console.log('Postre no encontrado');
          reject('Postre no encontrado');
        }
      })
      .catch((error) => reject(error));
  });
};




module.exports = {
  getPostres,
  getPostreById,
  addPostres,
  changeOfPostre,
  deletePostre
};
