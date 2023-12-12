// build your `/api/tasks` router here
const router= require('express').Router()
const Task = require('./model')

router.get('/', async (req, res, next) => {
    try {
      const getTasks = await Task.get();
      res.status(200).json(getTasks);
    } catch (error) {
      next(error);
    }
  });
  
module.exports= router