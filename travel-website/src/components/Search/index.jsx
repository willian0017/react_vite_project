import { useState } from "react";
const Search = ({data}) => {
    const [show, setShow] = useState(false)

    if (show === true) {
        setShow([])
        return;
    }

    if(!data || !data.length) return null;

    const resultList = data.map(({cca2, flags, name, capital,region}) => {
        return (
            <li key={cca2} onClick={() => setShow(!show)}>
                <img src={flags.svg} alt={name.common}/>
                <span><strong>{name.common}</strong> ({name.official})</span>
                {
                show? 
                    <div>
                        <ul>
                            <li><span>Capital:<span/> {capital}</span></li>
                            <li><span>Region:</span> {region}</li>
                        </ul>
                    </div> : null
                }
            </li>
        )
    })

    return (
        <div className="results">
            <ul>{resultList}</ul>
        </div>
    )
}

export default Search;