import Card from "./Card"
import {data} from "./Data"


const ArtGrid = ({ searchTerm }) => {

  const filteredData = searchTerm
    ? data.filter(art =>
        art.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data;

  return (
    <div className='grid-container'>
        {filteredData.map(art => <Card key={art.id} title={art.title} price={art.price} img={art.img}/>)}
    </div>
  )
}

export default ArtGrid