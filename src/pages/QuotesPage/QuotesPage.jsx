import './QuotesPage.css'
import axios from "axios"
import { useEffect, useState } from "react"
import Gallery from '../../components/Gallery/Gallery'
import Search from '../../components/Search/Search'


export default function QuotesPage(){

    const [quotes, setQuotes] = useState()

    const getQuotes = (characterText) => {
        axios.get(`https://thesimpsonsquoteapi.glitch.me/quotes?count=15&character=${characterText}`).then(res => {
            setQuotes(res.data)
        })
    }

    useEffect(()=>{
        getQuotes("")
    }, [])

    return(
        <div className="contenedor">
            <Search onSearch={getQuotes}></Search>
            <Gallery array={quotes}></Gallery>
        </div>
    )
}