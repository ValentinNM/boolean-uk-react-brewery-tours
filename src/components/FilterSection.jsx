export default function FilterSection(props) {
  console.log("props here in FilterSection: ", props);

  const { cities, handleFilterByCity } = props;

  return (
    <aside className="filters-section">
      <h2>Filter By:</h2>
      <form id="filter-by-type-form" autocompete="off">
        <label for="filter-by-type">
          <h3>Type of Brewery</h3>
        </label>
        <select name="filter-by-type" id="filter-by-type">
          <option value="">Select a type...</option>
          <option value="micro">Micro</option>
          <option value="regional">Regional</option>
          <option value="brewpub">Brewpub</option>
        </select>
      </form>
      <div className="filter-by-city-heading">
        <h3>Cities</h3>
        <button className="clear-all-btn">clear all</button>
      </div>
      <form id="filter-by-city-form">
        {cities.map((city, index) => {
          const cityLowerCase = city.toLowerCase();

          return (
            <>
              <input
                type="checkbox"
                name={cityLowerCase}
                value={cityLowerCase}
                onChange={handleFilterByCity}
              />
              <label htmlFor={cityLowerCase}>{city}</label>
            </>
          );
        })}
      </form>
    </aside>
  );
}
