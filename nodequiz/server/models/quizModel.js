const mongoose = require('mongoose');
 
const quizSchema = new mongoose.Schema({
    quizId:  Number,
    quizName: String,
    question:[
        {
            questionId: Number,
            questionText: String,
            answer: [
                {
                    answerId: Number,
                    answerText: String,
                    correctAnswer: Boolean
                }
            ]
        }
    ]   
});

const Quiz = module.exports = mongoose.model('Quiz', quizSchema);

module.exports.getById = (id, callback) => {
    var query = {quizId: id};
    Quiz.findById(query, callback);
}

