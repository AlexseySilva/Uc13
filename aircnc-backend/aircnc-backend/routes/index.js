const express = require('express');
const SessionRoutes = require('./Session.routes');
const SpotsRoutes = require('./Spots.routes');
const dashboardRoutes = require('./Dashboard.routes');

const router = express.Router();

router.use('/session', SessionRoutes);
router.use('/spots', SpotsRoutes)
router.use('/dashboard', dashboardRoutes)


module.exports = router;




