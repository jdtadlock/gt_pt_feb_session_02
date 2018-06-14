var NotesController = require('../controllers/NotesController');

module.exports = function(app, notes) {
  app.get('/', function(req, res) {
    NotesController.getAll(res, notes);
  });
}
