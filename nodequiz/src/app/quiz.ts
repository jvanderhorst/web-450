export class Quiz{
    quizId: number;
    quizName: string;
    question: [
        {
            questionId: number;
            questionText: string;
            answer: [
                {
                    answerId: number;
                    answerText: string;
                    correctAnswer: boolean;
                }
            ]
        }
    ]
}

