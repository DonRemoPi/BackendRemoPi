const express = require('express');
const multer = require('multer');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

const upload = multer({
  dest: 'public/files',
})

router.get('/', (req, res) => {
  controller.getPizzas()
    .then((pizzaList) => {
      response.success(req, res, pizzaList, 200)
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500)
    })
});

router.get('/:id', (req, res) => {
  controller.getPizzaById(req.params.id)
    .then((pizzaList) => {
      response.success(req, res, pizzaList, 200)
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500)
    })
});

router.post('/', upload.single('file'), (req, res) => {
  console.log(req.file)
  
  const { name, toppings, price } = req.body; 
  controller.addPizza(name, toppings, price, req.file) 
    .then((newPizza) => {
      response.success(req, res, newPizza, 201) 
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500)
    })
});

router.patch('/:id', (req, res) => {
  const { name, toppings, price } = req.body;
  controller.changeOfPizza(req.params.id, name, toppings, price)
    .then((newPizza) => {
      response.success(req, res, newPizza, 201) 
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500)
    })
});

router.delete('/:id', (req, res) => {
  controller.deletePizza(req.params.id)
    .then((newPizza) => {
      response.success(req, res, newPizza, 204) 
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500)
    })
});


module.exports = router;
