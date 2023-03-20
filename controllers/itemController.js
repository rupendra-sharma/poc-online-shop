const Item = require('../models/itemModel');

/*
    Create Item
*/
exports.create = async (req, res, next) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};

/*
    Find Item
*/
exports.findAll = async (req, res, next) => {
  try {
    const items = await Item.find({});
    res.json(items);
  } catch (err) {
    next(err);
  }
};


/*
    Find Item by Id
*/
exports.findById = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (err) {
    next(err);
  }
};

/*
    Update Item
*/
exports.update = async (req, res, next) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (err) {
    next(err);
  }
};
