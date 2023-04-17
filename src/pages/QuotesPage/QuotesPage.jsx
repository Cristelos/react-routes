import './QuotesPage.css'
import axios from "axios"
import { useEffect, useState } from "react"
import Gallery from '../../components/Gallery/Gallery'


export default function QuotesPage(){

    const [quotes, setQuotes] = useState()


    useEffect(()=>{
        axios.get("https://thesimpsonsquoteapi.glitch.me/quotes?count=15").then(res => {
            console.log(res)
            setQuotes(res.data)
        })
    }, [])

    return(
        <div className="contenedor">
            {/* <div className="characters"> 
                {quotes && quotes.map((quote, index) => <li key={index}>
                    <h3>{quote.character}</h3>
                    <p>{quote.characterDirection}</p>
                    <img src={quote.image} alt={quote.character}/>
                    <p>{quote.quote}</p>
                    </li>)}
            </div> */}
            <Gallery array={quotes}></Gallery>
        </div>
    )
}