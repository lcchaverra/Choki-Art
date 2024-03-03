import Card from "./Card";

const ArtGrid = ({ searchTerm, activeCategory, data }) => {
  const filteredData = data.filter((art) => {
    const titleMatches = art.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const categoryMatches =
      activeCategory === "All" || art.category === activeCategory;
    return titleMatches && categoryMatches;
  });

  return (
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
  );
};

export default ArtGrid;
