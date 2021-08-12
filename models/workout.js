const mongoose = require("mongoose");

const { Schema } = mongoose;

const opts = { toJSON: { virtuals: true } };

const workoutSchema = new Schema(
  {
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
  },
  opts
);

// workoutSchema.virtual("totalDuration").get(function () {
//   return this.workout.reduce((total, exercises) => {
//     return total + exercises.duration;
//   }, 0);
// });
const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
