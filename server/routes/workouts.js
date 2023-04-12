const express = require('express');
const Workout = require('../models/workout-model');
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workout-controller');

const router = express.Router();

// GET all workouts
router.get('/', getWorkouts);

// GET a single workout
router.get('/:id', getWorkout);

// POST a new workout
router.post('/', createWorkout);

// DELETE a new workout
router.delete('/:id', deleteWorkout);

// POST a new workout
router.patch('/:id', updateWorkout);

module.exports = router;