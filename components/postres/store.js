const Postre = require('./model');

const list = async () => {
  return await Postre.find({});
};

const get = async (id) => {
  return await Postre.findById(id);
};

const add = async (newPostre) => {
  const postre = new Postre(newPostre);
  return await postre.save();
};

const update = async (id, postreToUpdate) => {
  const postre = await Postre.findById(id);

  if (!postre) {
    throw new Error(`Postre con id ${id} no encontrado`);
  }

  postre.name = postreToUpdate.name || postre.name;
  postre.toppings = postreToUpdate.toppings || postre.toppings;
  postre.price = postreToUpdate.price || postre.price;

  return await postre.save();
};

const remove = async (id) => {
  return await Postre.findByIdAndRemove(id);
};

module.exports = {
  list,
  get,
  add,
  update,
  remove,
};
