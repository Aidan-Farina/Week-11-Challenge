const express = require('express');
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');

const router = express.Router();
const db = './db/db.json';

router.get('/', (req, res) => {
    const notes = readFromFile(db);
    res.json(notes);
  });

module.exports = router;