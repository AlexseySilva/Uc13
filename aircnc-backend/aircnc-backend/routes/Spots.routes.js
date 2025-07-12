const express = require('express');
const multer = require('multer');

const SpotsController = require('../controllers/Spots.controller');
const router = express.Router();

const uploadConfig = require('../config/upload');
const upload = multer(uploadConfig);

router.post('/', upload.single('thumbnail'), SpotsController.store)


module.exports = router