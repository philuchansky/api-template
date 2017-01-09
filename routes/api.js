var
  express = require('express'),
  apiRouter = express.Router(),
  apiController = require('../controllers/api.js')

apiRouter.get('/', apiController.index)
apiRouter.post('/', apiController.create)

apiRouter.get('/:id', apiController.show)
apiRouter.patch('/:id', apiController.update)
apiRouter.delete('/:id', apiController.destroy)

module.exports = apiRouter
