const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('about', {title: 'About | Alee Productions'});
  });

module.exports = router;