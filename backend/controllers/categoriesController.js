const router = require('express').Router()
const categoryModel = require('../models/categories/categoryModel');
const auth = require('../authentication/auth')

//get categories
router.get('/', categoryModel.getCategories);
//get one category
router.get('/:id', categoryModel.getOneCategory);
//create a new category
router.post('/new', auth.verifyToken ,categoryModel.checkCategoryName, categoryModel.createCategory);
//update specific category
router.patch('/:id', auth.verifyToken ,categoryModel.checkCategoryName, categoryModel.updateCategory);
//delete specific category
router.delete('/:id', auth.verifyToken, categoryModel.deleteCategory);


module.exports = router;