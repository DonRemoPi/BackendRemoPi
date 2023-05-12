const Pizza = require('./model');

const list = async () => {
  return await Pizza.find({});
};

const get = async (id) => {
  return await Pizza.findById(id);
};

const add = async (newPizza) => {
  const pizza = new Pizza(newPizza);
  return await pizza.save();
};

const update = async (id, pizzaToUpdate) => {
  const pizza = await Pizza.findById(id);

  if (!pizza) {
    throw new Error(`Pizza with id ${id} not found`);
  }

  pizza.name = pizzaToUpdate.name || pizza.name;
  pizza.toppings = pizzaToUpdate.toppings || pizza.toppings;
  pizza.price = pizzaToUpdate.price || pizza.price;

  return await pizza.save();
};

const remove = async (id) => {
  return await Pizza.findByIdAndRemove(id);
};

module.exports = {
  list,
  get,
  add,
  update,
  remove,
};
