const express = require('express');
const router = express.Router();
const { Sequelize, QueryTypes } = require('sequelize');
const sequelize = require('../../sequelize');

const { note } = sequelize.models;

router.get('/', async (_req, res) => {
  try {
    const notes = await note.findAll();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { content, important } = req.body;
    const newNote = await note.create({
      content,
      important,
    });
    await newNote.save();
    res.status(200).json(newNote);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
