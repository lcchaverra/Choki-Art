import FavoriteGrid from './FavoriteGrid';
import {data} from './Data'
const FavoriteContent = () => {
  return (
    <>
        <div className='Banner-container'>
            <div className="main-search">
                <h3>Estas son sus Obras Favoritas</h3>
            </div>
            <FavoriteGrid data={data}/>
        </div>
    </>
  )
}

export default FavoriteContent