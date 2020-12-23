import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import '../../Component_css/Games_CSS/GameLinks.css'

function GameLinks (){
    let { path, url } = useRouteMatch();
    
    return (
        <div className="gameLinks"> 
            <div className="gameDropDown"> 
                <Link to={url} className="gameTitles">Game Titles </Link>

                <div className="gameLinks Links"> 
                    <Link to={`${url}/Calculator`} > Calculator </Link>
                    <Link to={`${url}/SimpleJump`} > SimpleJump </Link>
                    <Link to={`${url}/Calculator`} > Calculator </Link>
                </div>
                
            </div>
        </div>
    )
}

export default GameLinks