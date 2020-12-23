import React from 'react'
import '../Component_css/GameProjects.css'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import GameLinks from './Games/GameLinks'
import Calculator from './Games/Calculator'
import SimpleJump from './Games/SimpleJump'

function GameProjects() {
    let { path, url } = useRouteMatch();
   
    return(
        <>
        <div className="sectionimg6" id="gameprojects"> 
            <h1 className="sectiontitle"> Games </h1> 
        </div>
        <div  className="gameprojectsSection">
            <h1> WELCOME TO THE GAME CHANNEL</h1>
            <GameLinks />
           

            <Switch>
                <Route path={`${path}/Calculator`}  exact component={Calculator}/>
                <Route path={`${path}/SimpleJump`}  exact component={SimpleJump}/>
            </Switch>
           
        </div>
        </>
    )
}

export default GameProjects