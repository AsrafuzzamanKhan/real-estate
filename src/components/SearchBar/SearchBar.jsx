import { useState } from 'react'
import './SearchBar.scss'
const types = ['buy', 'rent']
const SearchBar = () => {
    const [query, setQuery] = useState({
        type: 'buy',
        location: '',
        minPrice: 0,
        maxPrice: 0
    })

    const switchType = (val) => {
        setQuery((prev) => ({ ...prev, type: val }))
    }
    return (
        <div className='searchBar'>
            <div className="type">
                {types.map((type, i) => (
                    <button key={i} onClick={() => switchType(type)} className={query.type === type ? 'active' : ''}>{type}</button>
                ))}


            </div>
            <form >
                <input type="text" name='loaction' placeholder='City Loation' />
                <input type="number" min={0} max={1000000} name='minPrice' placeholder='Min Price' />
                <input type="number" min={0} max={1000000} name='maxPrice' placeholder='Max Price' />
                <button>
                    <img src="/search.png" alt="search" />
                </button>
            </form>
        </div>
    )
}

export default SearchBar