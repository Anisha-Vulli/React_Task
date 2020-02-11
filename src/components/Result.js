import React  from "react";

const Result = ({score, playAgain}) => (
    <div className = "score-board">
        <div className = "score">
            <h4>You scored {score}/5 correct answers</h4>
            <button className = "playagainBtn" onClick = {playAgain}> Play Again! </button>
        </div>
    </div>
)

export default Result;