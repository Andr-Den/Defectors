const router = require('express').Router();
const {
  getCompanies, getCompany, createCompany, updateCompany, deleteCompany, search,
} = require('../controllers/companies');

router.get('/', getCompanies);
router.get('/search', search);
router.get('/:_id', getCompany);
router.post('/', createCompany);
router.patch('/:_id', updateCompany);
router.delete('/:_id', deleteCompany);

module.exports = router;
