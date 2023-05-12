const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
  controller.getEmpanadas()
    .then((empanadaList) => {
      response.success(req, res, empanadaList, 200);
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500);
    });
});

router.get('/:id', (req, res) => {
  controller.getEmpandaById(req.params.id)
    .then((empanada) => {
      response.success(req, res, empanada, 200);
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500);
    });
});

router.post('/', (req, res) => {
  const { name, toppings, price } = req.body; 
  controller.addEmpanada(name, toppings, price) 
    .then((newEmpanada) => {
      response.success(req, res, newEmpanada, 201);
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500);
    });
});

router.patch('/:id', (req, res) => {
  const { name, toppings, price } = req.body;
  controller.changeOfEmpanada(req.params.id, name, toppings, price)
    .then((updatedEmpanada) => {
      response.success(req, res, updatedEmpanada, 200);
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500);
    });
});

router.delete('/:id', (req, res) => {
  controller.deleteEmpanada(req.params.id)
    .then(() => {
      response.success(req, res, null, 204);
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500);
    });
});

module.exports = router;
