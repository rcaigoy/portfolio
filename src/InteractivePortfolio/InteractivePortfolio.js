import React from 'react'

function InteractivePortfolio() {
    return(
        <div id="canvas-holder">
            <div className="Controls">
                <h2>Controls</h2>
                    <br />
                <div>
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
                    <br />
                </div>

                <br />
                <br />
                <label>Character Speed</label>
                <br />
                <input type="range" id="CharacterSpeedRange" name="CharacterSpeedRange"
                min="12" max="62" step="5" defaultValue="12"
                />
                <br />
                (zoom out for better view)
                <br /><br />
            </div>

            <div id="sketch-holder">
            </div>
            
        </div>
    );
}

export default InteractivePortfolio;