const mongoose = require("mongoose");

const { Schema } = mongoose;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
    required: "What date was the excercise completed",
  },
  excercises: [
    {
      type: {
        type: String,
        required: "What type of excercise",
      },
      name: {
        type: String,
        required: "What is the name of the excercise",
      },
      duration: {
        type: Number,
        required: "How long is the excercise done for",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
