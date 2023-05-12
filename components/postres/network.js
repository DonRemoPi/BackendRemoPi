const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
  controller.getBebidas()
    .then((bebidaList) => {
      response.success(req, res, bebidaList, 200);
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500);
    });
});

router.get('/:id', (req, res) => {
  controller.getBebidaById(req.params.id)
    .then((bebida) => {
      response.success(req, res, bebida, 200);
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500);
    });
});

router.post('/', (req, res) => {
  const { name, type, price } = req.body;
  controller.addBebida(name, type, price)
    .then((newBebida) => {
      response.success(req, res, newBebida, 201);
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500);
    });
});

router.patch('/:id', (req, res) => {
  const { name, type, price } = req.body;
  controller.updateBebida(req.params.id, name, type, price)
    .then((updatedBebida) => {
      response.success(req, res, updatedBebida, 200);
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500);
    });
});

router.delete('/:id', (req, res) => {
  controller.removeBebida(req.params.id)
    .then(() => {
      response.success(req, res, null, 204);
    })
    .catch(e => {
      response.error(req, res, 'Unexpected Error', 500);
    });
});

module.exports = router;
