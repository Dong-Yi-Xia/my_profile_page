import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../../Component_css/Games_CSS/SimpleJoke.css'

function SimpleJoke(){
    const instance = axios.create({
        baseURL: "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes"
    })
   
    const [fetchURL, setFetchURL] = useState("/random/jokes")
    const [jokes, setJokes] = useState([])

    useEffect(()=> {

        async function fetchJokes(){
            const request = await instance.get(fetchURL)
            const response = request.data
            Array.isArray(response) ? setJokes(...response) : setJokes(response)
            // return response
        }
        return fetchJokes()

    },[fetchURL])


    function addSelection(evt) {
     
        let x = document.querySelectorAll(".jokeType");
        x.classList.remove("show")

        x= evt.target
        x.classList.add("show")
        console.log(x)
    }

    // console.log(jokes)
    return(
        <div>
            <h1>Tell Me A Joke And Brighten My Day</h1>
          
            <div className="jokeSelection" onClick={addSelection}>
                <button className="jokeType" onClick={ ()=> setFetchURL("/random/jokes") }> General </button>
                <button className="jokeType" onClick={ ()=> setFetchURL("/random/type/knock-knock") }> Knock Knock </button>
                <button className="jokeType" onClick={ ()=> setFetchURL("/random/type/programming") }> Programming </button>
            </div>

            <p>{jokes.type}</p>
            <p>{jokes.setup}</p>
            <p>{jokes.punchline}</p>
        </div>
    )
}

export default SimpleJoke