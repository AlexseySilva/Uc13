// index() = listagem de dashboards
const  express = require('express');
const DashboardController = require('../controllers/Dashboard.controller');
const router = express.Router();

router.get('/', DashboardController.index); // List all dashboards

module.exports = router;
