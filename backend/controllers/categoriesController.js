const router = require('express').Router()
const categoryModel = require('../models/categories/categoryModel');

//get categories
router.get('/', categoryModel.getCategories);
//get one category
router.get('/:id', categoryModel.getOneCategory);
//create a new category
router.post('/new', categoryModel.checkCategoryName, categoryModel.createCategory);
//update specific category
router.patch('/:id', categoryModel.checkCategoryName, categoryModel.updateCategory);
//delete specific category
router.delete('/:id', categoryModel.deleteCategory);
// get libraryItems with specifik CategoryID
router.get('/:id/libraryItems', LibraryItemModel.getLibraryItemsByCatId);


module.exports = router;