const express = require('express');
const router = express.Router();

router.get('/notes/add', (req, res) => {
    res.render('notes/new-notes');
});

router.post('/notes/new-notes', (req, res) =>{
    console.log(req.body);
    res.send('OK');
});

router.get('/notes', (req, res) => {
    res.send('Notas de la BD');
});

module.exports = router;