export default function Gallery({array}){



    return(

        <div className="contenedor">
            <div className="characters"> 
                {array && array.map((quote, index) => <li key={index}>
                    <h3>{quote.character}</h3>
                    <p>{quote.characterDirection}</p>
                    <img src={quote.image} alt={quote.character}/>
                    <p>{quote.quote}</p>
                    </li>)}
            </div> 
        </div>
    )
}