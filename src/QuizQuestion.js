import React, {Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component
{
    handleClick(buttonText)
    {
        if( buttonText===this.props.quiz_question.answer )
            this.props.showNextQuestionHandler();
    }
    render()
    {
        // let a = [];
        // // console.log(this.props.quiz_question);
        // for(let i=0; i<this.props.quiz_question.answer_options.length; i++)
        // {
        //     // I need to pass the the question number state
        //     let isAnswer = this.props.quiz_question.answer_options[i]===this.props.quiz_question.answer;
        //     a.push(<QuizQuestionButton button_text={this.props.quiz_question.answer_options[i]} isA={isAnswer} question_number={this.props.question_number} next={this.props.next}/>);
        // }
        // console.log(a);
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                    {this.props.quiz_question.answer_options.map( (answer_option,index) => <QuizQuestionButton clickHandler={this.handleClick.bind(this)} key={index} button_text={answer_option}/> )}
                    </ul>
                </section>
            </main>
        );
    }
};

export default QuizQuestion;
