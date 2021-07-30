import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json');

class Quiz extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {quiz_position: 1};
        this.setState = this.setState.bind(this);
    }
    showNextQuestion()
    {
        this.setState( {quiz_position: this.state.quiz_position+1} );
    }
    render()
    {
        const isQuizEnd = this.state.quiz_position-1===quizData.quiz_questions.length;
        console.log(this.state.quiz_position-1);
        console.log( quizData.quiz_questions[this.state.quiz_position-1] );
        // const isQuizEnd = false;
        return (
            isQuizEnd ?
            (
                <div>
                <QuizEnd />
                </div>
            )
            :
            (
                <div>
                <QuizQuestion showNextQuestionHandler={this.showNextQuestion.bind(this)} quiz_question={ quizData.quiz_questions[this.state.quiz_position-1] } question_number={this.state.quiz_position} next={this.setState}/>
                </div>
            )
        );
    }
};

export default Quiz;
