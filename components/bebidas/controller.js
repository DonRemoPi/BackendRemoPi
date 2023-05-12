const store = require('./store');
// const { validationResult } = require('express-validator');

const getBebidas = () => {
  return new Promise((resolve, reject) => {
      resolve(store.list());
  })
}

const getBebidaById = (id) => {
  return new Promise((resolve, reject) => {
    store.get(id)
      .then((bebida) => {
        if (!bebida) {
          reject(`Bebida with id ${id} not found`);
        } else {
          resolve(bebida);
        }
      })
      .catch((error) => reject(error));
  });
};

const addBebida = (name, type, price) => {
  return new Promise((resolve, reject) => {
    if (!name || !type || !price) {
      console.error('[messageController] Faltan datos de la bebida');
      reject('Los datos son incorrectos');
      return;
    }

    const newBebida = {
      name,
      type,
      price,
    };

    store
      .add(newBebida)
      .then((addedBebida) => resolve(addedBebida))
      .catch((error) => reject(error));
  });
};

const updateBebida = (id, name, type, price) => {
  return new Promise((resolve, reject) => {
    store.update(id, { name, type, price })
      .then((bebida) => {
        if (!bebida) {
          reject(`Bebida with id ${id} not found`);
        } else {
          resolve(bebida);
        }
      })
      .catch((error) => reject(error));
  });
};

const deleteBebida = (id) => {
  return new Promise((resolve,reject)=>{
    store.remove(id)
      .then(() => {
        if (id) {
          console.log('Bebida eliminada');
          resolve('Bebida eliminada');
        } else {
          console.log('Bebida no encontrada');
          reject('Bebida no encontrada');
        }
      })
      .catch((error) => reject(error));
  });
};

module.exports = {
  getBebidas,
  getBebidaById,
  addBebida,
  updateBebida,
  deleteBebida
};
