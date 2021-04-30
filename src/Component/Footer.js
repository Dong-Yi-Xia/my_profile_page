import React, {useState,useEffect} from 'react'
import '../Component_css/Footer.css'



function Footer () {

    const [visit, setVisit] = useState('')

    useEffect(() => {
        fetch('https://api.countapi.xyz/update/dx.com/counting?amount=1')
        .then(resp => resp.json())
        .then(res => setVisit(res.value.toLocaleString('en-US')))
    },[])

    return (
        <div>
            <p> Dong Xia @ 2020 </p>
            <p> Visited: {visit} </p>
        </div>
    )
}

export default Footer