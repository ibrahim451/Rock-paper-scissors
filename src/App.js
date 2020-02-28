import React, {Component} from 'react';
import PlayerCard from './PlayerCard'

class Game extends Component {
  constructor() {
    super();
    this.signs = ["rock", "scissors", "paper"];
    this.state = {
      playerOne: "rock",
      playerTwo: "scissors",
    }

  }


  //this is where methods are put
  // '=>' that binds it and does the same function as 'super()'
  playGame = () => {
    this.setState({
      playerOne: this.signs[Math.floor(Math.random()*3)],
      playerTwo: this.signs[Math.floor(Math.random()*3)]
    })

  }

  decideWinner = () => {
    
  //  if (this.PlayerOne === this.playerTwo) {
//    return "Its a draw";   } else
 if (this.state.playerOne === "rock" && this.state.playerTwo === "scissors") {
    return "Player 1 wins!"
  } else if (this.state.playerOne === "rock" && this.state.playerTwo === "paper") {
    return "Player 2 wins!"
  }else if (this.state.playerOne === "paper" && this.state.playerTwo === "scissors") {
    return "Player 2 wins!"
  }else if (this.state.playerOne === "paper" && this.state.playerTwo === "rock") {
    return "Player 1 wins!"
  }else if (this.state.playerOne === "scissors" && this.state.playerTwo === "rock") {
    return "Player 2 wins!"
  }else if (this.state.playerOne === "scissors" && this.state.playerTwo === "paper") {
    return "Player 2 wins!"
  } else
    return "Draw! -____-  "

}





  render() {
    return(
      <div className="container">
        <div>
        <PlayerCard sign={this.state.playerOne}/>
        <PlayerCard sign={this.state.playerTwo}/>
        </div>
        <div className= "winner">{this.decideWinner()}</div>
        <button type="button" onClick={this.playGame}> Play the Game </button>
      </div>
    )
  }
};

export default Game;
