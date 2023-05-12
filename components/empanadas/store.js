const Empanada = require('./model');

const list = async () => {
  return await Empanada.find({});
};

const get = async (id) => {
  return await Empanada.findById(id);
};

const add = async (newEmpanadas) => {
  const empanada = new Empanada(newEmpanadas);
  return await empanada.save();
};

const update = async (id, EmpanadaToUpdate) => {
  const empanada = await Empanada.findById(id);

  if (!empanada) {
    throw new Error(`Empanada con id ${id} no encontrada`);
  }

  empanada.name = EmpanadaToUpdate.name || empanada.name;
  empanada.toppings = EmpanadaToUpdate.toppings || empanada.toppings;
  empanada.price = EmpanadaToUpdate.price || empanada.price;

  return await empanada.save();
};


const remove = async (id) => {
  return await Empanada.findByIdAndRemove(id);
};

module.exports = {
  list,
  get,
  add,
  update,
  remove,
};
