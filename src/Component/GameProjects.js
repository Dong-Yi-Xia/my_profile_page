import React from 'react'
import '../Component_css/GameProjects.css'
import { Route, Switch, useRouteMatch, Link } from 'react-router-dom'
import GameLinks from './Games/GameLinks'
import Calculator from './Games/Calculator'
import SimpleJoke from './Games/SimpleJoke'

function GameProjects() {
    let { path, url } = useRouteMatch();
   console.log(path)
    return(
        <>
        <div className="sectionimg6" id="gameprojects"> 
            <h1 className="sectiontitle"> Features </h1> 
        </div>
        <div  className="gameprojectsSection">
            <Link to={url} className="gameTitles">Feature App Titles </Link>
          
           
            <Switch>
                <Route path={`${path}`}  exact component={GameLinks}/>
                <Route path={`${path}/Calculator`}  component={Calculator}/>
                <Route path={`${path}/SimpleJoke`}  component={SimpleJoke}/>
            </Switch>
           
        </div>
        </>
    )
}

export default GameProjects