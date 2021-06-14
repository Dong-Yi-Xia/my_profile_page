import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import '../../Component_css/Games_CSS/GameLinks.css'

function GameLinks (){
    let { path, url } = useRouteMatch();
    
    return (
        <div className="gameLinks"> 

            <div className="gameDropDown"> 
              
                <div className="gameLinks Links"> 
                    <Link className="singleGame" to={`${url}/Calculator`} > Calculator </Link>
                    
                    <Link className="singleGame" to={`${url}/SimpleJoke`} > Simple Jokes </Link>

                    <a href='https://dong-yi-xia.github.io/ZTM_Project_01_Quote_generator/' target='_blank' rel="noreferrer" className='singleGame'> Quote Generator</a>

                    <a href='https://dong-yi-xia.github.io/ZTM_Project_02_Infinity_Scroller/' target='_blank' rel="noreferrer" className='singleGame'> Infinity_Scroller</a>

                    <a href='https://dong-yi-xia.github.io/ZTM_Project_03_Picture_in_Picture/' target='_blank' rel="noreferrer" className='singleGame'> Picture_in_Picture</a>
                    
                    <a href='https://dong-yi-xia.github.io/ZTM_Project_04_Joke_Teller/' target='_blank' rel="noreferrer" className='singleGame'> Joke_Teller</a>

                    <a href='https://dong-yi-xia.github.io/ZTM_Project_05_Light_Dark_Mode/' target='_blank' rel="noreferrer" className='singleGame'> Light_Dark_Mode</a>

                    <a href='https://dong-yi-xia.github.io/ZTM_Project_06_Animated-Template/' target='_blank' rel="noreferrer" className='singleGame'> Animated on Scroll</a>

                    <a href='https://dong-yi-xia.github.io/ZTM_Project_07_Navigation/' target='_blank' rel="noreferrer" className='singleGame'> Navigation Effect</a>

                    <a href='https://dong-yi-xia.github.io/ZTM_Project_08_Music_Player/' target='_blank' rel="noreferrer" className='singleGame'> Music_Player </a>

                    <a href='https://dong-yi-xia.github.io/ZTM_Project_09_Countdown/' target='_blank' rel="noreferrer" className='singleGame'> CountDown</a>

                    <a href='https://dong-yi-xia.github.io/ZTM_Project_10_Drag_And_Drop/' target='_blank' rel="noreferrer" className='singleGame'> Drag and Drop</a>

                     <a href='https://dong-yi-xia.github.io/using_firebase_firestore/' target='_blank' rel="noreferrer" className='singleGame'> Using Firebase Firestore Database</a>

                     <a href='https://dong-yi-xia.github.io/weather-app/' target='_blank' rel="noreferrer" className='singleGame'> Cities Weather App</a>

                     <a href='https://dong-yi-xia.github.io/hangman_app/' target='_blank' rel="noreferrer" className='singleGame'> Hangman Game</a>

                     <a href='https://dong-yi-xia.github.io/snake_app/' target='_blank' rel="noreferrer" className='singleGame'> Snake Game </a>

                     <a href='https://dong-yi-xia.github.io/word_counter/' target='_blank' rel="noreferrer" className='singleGame'> Word Counter </a>
                </div>
            </div>
            
        </div>
    )
}

export default GameLinks