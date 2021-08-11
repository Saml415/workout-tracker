const mongoose = require("mongoose");

const { Schema } = mongoose;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
    required: "What date was the exercise completed",
  },
  exercises: [
    {
      type: {
        type: String,
        required: "What type of exercise",
      },
      name: {
        type: String,
        required: "What is the name of the exercise",
      },
      duration: {
        type: Number,
        required: "How long is the exercise done for",
      },
      distance: {
        type: Number,
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
