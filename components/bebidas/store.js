const Bebida = require('./model');

const list = async () => {
    return await Bebida.find({});
  };
  
  const get = async (id) => {
    return await Bebida.findById(id);
  };
  
  const add = async (newBebida) => {
    const bebida = new Bebida(newBebida);
    return await bebida.save();
  };
  
  const update = async (id, bebidaToUpdate) => {
    const bebida = await Bebida.findById(id);
  
    if (!bebida) {
      throw new Error(`Bebida con id ${id} no encontrada`);
    }
  
    bebida.name = bebidaToUpdate.name || bebida.name;
    bebida.type = bebidaToUpdate.type || bebida.type;
    bebida.price = bebidaToUpdate.price || bebida.price;
  
    return await bebida.save();
  };
  
  const remove = async (id) => {
    return await Bebida.findByIdAndRemove(id);
  };
  
  module.exports = {
    list,
    get,
    add,
    update,
    remove,
  };