import mongoose from "mongoose";

const learnerSchema = new mongoose.Schema({
   
    scores: [
      {
        type: {
           type: String,
           enum: ['exam', 'quiz', 'homework'],
           message: '{VALUE} is not exam, quiz, or homework.'
        },
        score: {
          type: Number
        },
      }
    ],
  
    class_id: 
    {
        type: Number,
        required: true,
  },
    learner_id: 
    {
        type: Number,
        required: true
  }
});

export default new mongoose.model("grades", learnerSchema);
