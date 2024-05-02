const express = require('express');
const router = express.Router();
const connection = require('../database');


router.get('/', (req,res) => {
  const sql = "SELECT * FROM restrodata";
  connection.query(sql, (err, rows) => {
    if(err){
       console.error(err);
       res.status(500).send(err);
       return;
    }
    res.status(200).json(rows);
  });
});

router.get('/:name', (req,res) => {
  const sql = "SELECT * FROM restrodata WHERE name=?";
  connection.query(sql, [req.params.name],(err, rows) => {
    if(err){
       console.error(err);
       res.status(500).send(err);
       return;
    }
    res.status(200).json(rows);
  });
});

router.get('/cuisine/:cuisineType', (req,res) => {
  const sql = "SELECT * FROM restrodata WHERE cuisine=?";
  connection.query(sql, [req.params.cuisineType],(err, rows) => {
    if(err){
       console.error(err);
       res.status(500).send(err);
       return;
    }
    res.status(200).json(rows);
  });
});

router.get('/:search', (req,res) => {
  const sql = "SELECT * FROM restrodata WHERE address=?";
  connection.query(sql, [req.params.search],(err, rows) => {
    if(err){
       console.error(err);
       res.status(500).send(err);
       return;
    }
    res.status(200).json(rows);
  });
});

router.get('/:restaurantId/reviews', (req,res) => {
  const sql = "SELECT * FROM restrodata WHERE address=?";
  connection.query(sql, [req.params.search],(err, rows) => {
    if(err){
       console.error(err);
       res.status(500).send(err);
       return;
    }
    res.status(200).json(rows);
  });
});



router.delete('/:restaurantId', (req,res) => {
  const sql = "DELETE FROM restrodata WHERE id=?";
  connection.query(sql, [req.params.restaurantId],(err, rows) => {
    if(err){
       console.error(err);
       res.status(500).send(err);
       return;
    }
    res.status(200).json(rows);
  });
});

router.get('/rating/:minRating', (req,res) => {
  const sql = "DELETE FROM restrodata WHERE rating=?";
  connection.query(sql, [req.params.restaurantId],(err, rows) => {
    if(err){
       console.error(err);
       res.status(500).send(err);
       return;
    }
    res.status(200).json(rows);
  });
});

router.get('/rating/:minRating', (req,res) => {
  const sql = "DELETE FROM restrodata WHERE rating=?";
  connection.query(sql, [req.params.restaurantId],(err, rows) => {
    if(err){
       console.error(err);
       res.status(500).send(err);
       return;
    }
    res.status(200).json(rows);
  });
});


router.post('/', (req,res) => {
  var emp = req.body;
  var empData = [emp.name,emp.cuisine,emp.address,emp.city,emp.rating]
  const sql = "INSERT INTO restrodata(name,cuisine,address,city,rating) values(?)";
  connection.query(sql, [empData],(err, rows) => {
    if(err){
       console.error(err);
       res.status(500).send(err);
       return;
    }
    res.status(200).json(rows);
  });
});

router.patch('/:restaurantId', (req,res) => {
  var emp = req.body;
  const sql = 'UPDATE restrodata SET ? WHERE id='+emp.id;
  connection.query(sql, [emp],(err, rows) => {
    if(err){
       console.error(err);
       res.status(500).send(err);
       return;
    }
    res.status(200).json(rows);
  });
});


module.exports = router;

