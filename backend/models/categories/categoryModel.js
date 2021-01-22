const mongodb = require('mongoose')

const Category = require('./categorySchema');

// Get all categories
exports.getCategories = (req, res) => {
  Category.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({
      statusCode: 500,
      status: false,
      message: 'Failed to get categories',
      error: err
    }));
};

//get one category
exports.getOneCategory = (req, res) => {
  Category.findById(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({
      statusCode: 500,
      status: false,
      message: 'Failed to get category',
      error: err
    }));
};

exports.checkCategoryName = (req, res, next) => {
  Category.find({ name: { $regex: new RegExp(req.body.name, "i") } })
    .then(exists => {
      if (exists.length > 0) {
        return res.status(400).json({
          statusCode: 400,
          status: false,
          message: 'A category by that name already exists!'
        });
      };
      next();
    });
};

//create a new category
exports.createCategory = (req, res) => {
  const category = new Category({
    _id: new mongodb.Types.ObjectId,
    name: req.body.name,
  });

  category.save()
    .then(category => {
      res.status(201).json({
        statusCode: 201,
        status: true,
        message: 'Category created',
        data: {
          category
        }
      });
    })
    .catch(() => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to create category'
      });
    });
};

//update a specifik category
exports.updateCategory = (req, res) => {
  Category.updateOne({ _id: req.params.id }, req.body)
    .then(category => {
      Category.updateOne({ _id: req.params.id }, { $set: { modified: Date.now() } })
        .then(() => {
          res.status(200).json({
            statusCode: 200,
            status: true,
            message: 'Category updated',
            data: {
              category
            }
          })
        })
        .catch(() => {
          res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Failed to update category'
          })
        })
    })
};

//delete category
exports.deleteCategory = (req, res) => {
  // LibraryItem.find({ category: req.params.id })
  //   .then(exists => {
  //     if (exists.length > 0) {
  //       return res.status(400).json({
  //         statusCode: 400,
  //         status: false,
  //         message: 'The category contains libraryItems!'
  //       });
  //     }
  //     else {
  Category.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        statusCode: 200,
        status: true,
        message: 'Category deleted!'
      })
    })
    .catch(() => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to delete category'
      })
    })
};
    // })
// }