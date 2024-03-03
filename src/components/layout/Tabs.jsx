const Tabs = ({ activeCategory, onCategoryChange }) => {

  return (
    <>
      <nav className="tabs-menu">
        <ul>
          {[
            "All",
            "Abstracta",
            "Ceramica",
            "Escultura",
            "Madera Tallada",
            "Contemporánea",
          ].map((tab) => (
            <li
              key={tab}
              className={activeCategory === tab ? "activeTab" : ""}
              onClick={() => onCategoryChange(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Tabs;
