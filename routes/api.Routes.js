const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", async (req, res) => {
  try {
    const workoutData = await Workout.find();
    res.json(workoutData);
  } catch {
    res.status(400).json(err);
  }
});
