/* eslint-disable quotes */
/* eslint-disable linebreak-style */
"use strict";

const router = require("express").Router();
const { Candy } = require("../db");

// Your routes go here!
// NOTE: Any routes that you put here are ALREADY mounted on `/api`
// You can put all routes in this file HOWEVER,
// this file should almost be like a table of contents for the routers you create!
// For example:
//
// For your `/api/puppies` routes:
// router.use('/puppies', require('./puppies'))
//
// And for your `/api/kittens` routes:
// router.use('/kittens', require('./kittens'))

// If someone makes a request that starts with `/api`,
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!

router.get("/", async (req, res, next) => {
  try {
    const allItems = await Candy.findAll();
    res.json(allItems);
  } catch (error) {
    next(error);
  }
});

router.get("/ids", async (req, res, next) => {
  try {
    const ids = await Candy.findAll({ attributes: ["id", "name"] });
    res.json(ids);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const thisItem = await Candy.findById(req.params.id);
    res.json(thisItem);
  } catch (error) {
    next(error);
  }
});

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
