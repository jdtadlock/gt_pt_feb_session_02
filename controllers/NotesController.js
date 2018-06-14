
module.exports = {
  getAll: function(res, Note) {
    Note.find({}).toArray(function (err, notes) {
      if (err) return console.log(err);

      res.render('index', {
        notes: notes
      });
    });
  }
}