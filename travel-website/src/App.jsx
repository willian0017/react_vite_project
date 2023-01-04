import { useState, useEffect, useRef } from 'react'
import Search from './components/Search'
import './App.css'

function App() {
  const [ data, setData ] = useState([])
  const inputRef = useRef(null);

  useEffect(() => {
    if(inputRef) inputRef.current.focus();
  }, [])
  
  const handleInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;

    if (!value) {
      setData([])
      return;
    }

    const url = `https://restcountries.com/v3.1/name/${value}`

    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
  }

  return (
    <div className="container">
      <form>
        <label htmlFor="search">Country search:</label>
        <input type="search" id='search' onChange={handleInputChange} ref={inputRef}/>
      </form>
      <Search data={data}/>
    </div>
  )
}

export default App
