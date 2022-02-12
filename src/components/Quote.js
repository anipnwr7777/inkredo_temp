import React from "react";
import "./Quote.css"

export default function Quote() {
    const [quote, setQuote] = React.useState([])

    React.useEffect(() => {
        fetch("https://www.breakingbadapi.com/api/quote/random")
            .then(res => res.json())
            .then(data => setQuote(data));
    }, [])

    console.log(quote);

    return (
        <div className="quote-wrapper">
            {/* <span className="block-quote">"</span> */}
            <img src="https://www.pngall.com/wp-content/uploads/4/Quotation-Mark-PNG-Image.png" className="img-quote" alt=""></img>
            <h1>
                {quote.length && quote[0].quote}
            </h1>
        </div>
    )
}