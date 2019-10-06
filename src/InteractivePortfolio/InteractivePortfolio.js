import React from 'react'

function InteractivePortfolio() {
    return(
        <div id="canvas-holder">
            <div id="sketch-holder">
            </div>
            <div className="Controls">
                Controls
                <br />
                Press Left or Right arrow to move
                <br />
                Press J or spacebar to jump
                <br />
                Press W to wave
                <br />
                Press S to Salute
                <br />
                Press P to look at Phone
                <br />
                Press M while walking to moonwalk
            </div>
        </div>
    );
}

export default InteractivePortfolio;