// Filename: api-routes.js
// Initialize express router
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import contact controller
var userController = require('./userController');
// Contact routes
router.route('/user')
    .get(userController.index)
    .post(userController.new);

router.route('/userupdate')
    .post(userController.updates);

router.route('/user/:user_id')
    .get(userController.view)
    // .post(contactController.update)
    // .put(contactController.update)
    .delete(userController.delete);
// Export API routes
module.exports = router;