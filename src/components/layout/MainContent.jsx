import {useState} from 'react'
import { CiSearch } from "react-icons/ci";
import Tabs from './Tabs';
import ArtGrid from './ArtGrid';
import {data} from './Data'

const MainContent = () => {
  let favorites;
  const [searchTerm, setSearchTerm] = useState('');
  const [currentCategory, setCurrentCategory] = useState('All');
  const currentFavorites = JSON.parse(localStorage.getItem("favorites"))
  currentFavorites? favorites = currentFavorites : favorites = [];
  localStorage.setItem("favorites", JSON.stringify(favorites));
  
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const handleCategoryChange = (category) => {
    setCurrentCategory(category)
  }
  
  return (
    <div className='Banner-container'>
      <div className="main-search">
        <h3>What works of art do you like</h3>
        <div className="search-container">
        <input className='search-input' type="text" placeholder="Search..." value={searchTerm} onChange={handleChange} />
        <CiSearch className='search-icon' />       
        </div>
      </div>
      <Tabs activeCategory={currentCategory} onCategoryChange={handleCategoryChange} />
      <ArtGrid searchTerm={searchTerm} activeCategory={currentCategory} data={data}/>
    </div>
  )
}

export default MainContent