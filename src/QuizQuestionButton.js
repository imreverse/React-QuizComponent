import React, {Component} from 'react'

class QuizQuestionButton extends Component
{
    // constructor(props)
    // {
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this);
    // }
    handleClick()
    {
        this.props.clickHandler(this.props.button_text);
        // if( this.props.isA )
        // {
        //     let agla = this.props.question_number+1;
        //     // console.log(agla);
        //     this.props.next( {quiz_position:agla} );
        // }
        // else
        // {
        // }
    }
    render()
    {
        return (
            <li>
            <button onClick={this.handleClick.bind(this)}>
            {this.props.button_text}
            </button>
            </li>
        );
    }
};

export default QuizQuestionButton;


// import React from "react";
// import "./Player.css";

// // Destructuring props in the function arguments.
// const Player = ({ allPlayers, name, yearsPro, position, removePlayer }) => {
//   const handleRemove = () => {
//     const filteredPlayers = allPlayers.filter((player) => player.name !== name);
//     removePlayer(filteredPlayers);
//   };

//   return (
//     <span onClick={handleRemove}>
//       {name} ({position}) | Years pro: {yearsPro}
//     </span>
//   );
// };

// export default Player;
