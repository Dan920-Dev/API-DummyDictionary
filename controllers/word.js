const WordModel = require("../models/word");

exports.getAll = async (req, res, next) => {
    try {
      let words = await WordModel.find({});
      res.send({
        count: words.length,
        words,
      });
    } catch (err) {
      next(err);
    }
  };