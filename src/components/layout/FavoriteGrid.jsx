import Card from "./Card";

const FavoriteGrid = ({data}) => {
    const favoritesList = JSON.parse(localStorage.getItem('favorites'))
    const filteredData = data.filter(art => favoritesList.includes(art.title))

    return (
    <div>
        <div className="grid-container">
            {filteredData.map((art) => (
                <Card
                key={art.id}
                title={art.title}
                price={art.price}
                img={art.img}
                category={art.category}
                />
            ))}
        </div>
    </div>
  )
}

export default FavoriteGrid