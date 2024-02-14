import {useState, useEffect} from 'react'
import { CiSearch } from "react-icons/ci";
import Tabs from './Tabs';
import ArtGrid from './ArtGrid';

const MainContent = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='Banner-container'>
      <div className="main-search">
        <h3>What works of art do you like</h3>
        <div className="search-container">
        <input className='search-input' type="text" placeholder="Search..." value={searchTerm} onChange={handleChange} />
        <CiSearch className='search-icon' />       
        </div>
      </div>
      <Tabs />
      <ArtGrid searchTerm={searchTerm}/>
    </div>
  )
}

export default MainContent