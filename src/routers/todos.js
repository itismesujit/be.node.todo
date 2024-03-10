const
  router = require('express').Router(),
  todosController = require('../controller/todos');
  // required  schema if required


router.get('/v1/getById/:postId', todosController.getById);
router.get('/v1/get', todosController.get);
router.post('/v1/add', todosController.add);
router.put('/v1/update', todosController.update);
router.patch('/v1/partialUpdate', todosController.partialUpdate);
router.delete('/v1/delete', todosController.delete);

module.exports = router;