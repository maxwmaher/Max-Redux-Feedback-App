const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', (req, res) => {
    const newFeedback = req.body;
    let sqlText = `INSERT INTO feedback ("feeling", "feeling_desc", "understanding", "understanding_desc",
                    "support", "support_desc", "comments")
                      VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    pool.query(sqlText, [newFeedback.Q1.selectedValueScore, newFeedback.Q1.selectedValueDescription,
                        newFeedback.Q2.selectedValueScore, newFeedback.Q2.selectedValueDescription,
                         newFeedback.Q3.selectedValueScore, newFeedback.Q3.selectedValueDescription,
                         newFeedback.Q4])
        .then((result) => {
            console.log('feedback added:', newFeedback);
            res.sendStatus(201);
        }).catch((err) => {
            console.log('POST error', err);
            res.sendStatus(500);
        })
})

module.exports = router